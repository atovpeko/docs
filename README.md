
## Formatting and content rules



### Code blocks

#### Command formatting

When showing commands being entered from a command line, do not include a
character for the prompt. Do this:

```bash
some_command
```

instead of this:

```bash
some_command
```

or this:

```bash
> some_command
```

Otherwise the code highlighter may be disrupted.



#### Line numbers and copy button

Code blocks have line numbers and copy buttons by default. To remove line
numbers and copy buttons on a case-by-case basis, use the `CodeBlock` component
directly rather than a native Markdown code block.

To remove the copy button, set `canCopy` to `false`.

To remove line numbers, set `showLineNumbers` to `false`.

```markdown
<CodeBlock canCopy={false} showLineNumbers={false} children={`
time                   | symbol |    price     | day_volume
-----------------------+--------+--------------+------------
2023-06-07 12:00:04+00 | C      |        47.39 |
2023-06-07 12:00:04+00 | T      |        15.67 |
2023-06-07 12:00:04+00 | SQ     |        66.27 |
2023-06-07 12:00:04+00 | CRM    |        213.1 |
2023-06-07 12:00:04+00 | CVX    |        155.9 |
2023-06-07 12:00:04+00 | BAC    |        29.34 |
...
`} />
```

### Partials

Partials allow you to reuse snippets of content in multiple places. All partials
live in the `_partials` top-level directory. To make a new partial, create a new
`.mdx` file. The filename must start with an underscore.

To insert the partial in another document, put an import statement in the
document. The import statement goes before the content and after any
frontmatter. For example:

`import PartialName from 'versionContent/_partials/_partial-name.mdx';`

`PartialName` can be any CamelCased name, but it is recommended to use the
CamelCased filename to prevent name clashes, because partial names are global
across all MDX files.

Where you need the partial to display, insert it as a self-closing tag:

`<PartialName />`

### General formatting conventions

To maintain consistency, please follow these general rules.

*   Maintain text editor width for paragraphs at 80 characters. We ask you to do
this to assist in reviewing documentation changes. When text is very wide, it
is difficult to visually see where text has changed within a paragraph and keeping
a narrow width on text assists in making PRs easier to review. **Most editors such
as Visual Studio Code have settings to do this visually.**
*   Most links should be reference-style links where the link address is at the
bottom of the page. The two exceptions are:
    *   Links within highlight blocks (Note, Important, or Warning). These must be inline links for now
    *   Links to anchors on the same page as the link itself.
*   All functions, commands and standalone function arguments (ex. `SELECT`,
`time_bucket`) should be set as inline code within backticks ("\`command\`").
*   Functions should not be written with parentheses unless the function is
being written with arguments within the parentheses.
*   "PostgreSQL" is the way to write the elephant database name, rather than
"Postgres." "TimescaleDB" refers to the database, "Timescale" refers to the
company.
*   Use backticks when referring to the object of a user interface action.
For example: Click `Get started` to proceed with the tutorial.

### Callout and highlight blocks

To create a callout around a paragraph of text, wrap it with the following custom
React component tag. **Reminder**, any links within the callout text MUST have
inline link styles.

The `type` can currently support a value of `"note"`, `"warning"`,
`"important"`, `"deprecation"` or `"cloud"`". `cloud` produces a callout
for content specifically referring to hosted Timescale.

```html
<Highlight type="note">
Callout text goes here...

Example link style would [look like this](http://example.com/)
</Highlight>
```

### Tags

You can use tags to indicate links to downloadable files, or to indicate
metadata about functions. Available tags:

*   Download tags: `<Tag type="download">Markdown link to download</Tag>`
*   Experimental tags: `<Tag type="experimental" content="Experimental" />` or
    `<Tag type="experimental-toolkit" content="Experimental" />`
*   Toolkit tag: `<Tag type="toolkit" content="Toolkit" />`
*   Community tag: `<Tag type="community" content="Community" />`

By default, tags have a solid background and gray text. There is also a hollow
variant:

```markdown
<Tag variant="hollow">Text to display in a tag</Tag>
```

### Procedures

Procedures are used to indicate a sequence of steps. For syntax, see [the
procedure example](./_procedure-block.md).

### Optional label

Used to indicate an optional step within a procedure. Syntax: `<Optional />`

### Multi-code blocks

Multi-code blocks are code blocks with a language or OS selector. For syntax,
see [the multi-code-block example](./_multi-code-block.md).

### Tabs 

Tabs can be used to display content that differs based on a user selection. The
syntax is:

```md
<Tabs label="Description of section, used for accessibility">

<Tab title="Title that is displayed on first tab">

Content goes here

</Tab>

<Tab title="Title that is displayed on second tab">

Content goes here

</Tab>

</Tabs>
```

Note that spacing is important.

### Editing troubleshooting sections

Troubleshooting pages are not written as whole Markdown files, but are
programmatically assembled from troubleshooting entries in the
`_troubleshooting` folder. Each entry describes a single troubleshooting case
and its solution, and contains the following frontmatter:

|Key|Type|Required|Description|
|-|-|-|-|
|`title`|string|Yes|The title of the troubleshooting entry, displayed as a heading above it|
|`section`|the literal string `troubleshooting`|Yes|Must be `troubleshooting`, used to identify troubleshooting entries during site build|
|`products` or `topics`|array of strings|Yes (can have either or both, but must have at least one)|The products or topics related to the entry. The entry will show up on the troubleshooting pages for the listed products and topics.|
|`errors`|object of form `{language: string, message: string}`|No|The error, if any, related to the troubleshooting entry. Displayed as a code block right underneath the title. `language` is the programming language to use for syntax highlighting.|
|`keywords`|array of strings|No|These are displayed at the bottom of every troubleshooting page. Each keyword links to a collection of all pages associated with that keyword.|
|`tags`|array of strings|No|Concepts, actions, or things associated with the troubleshooting entry. These are not displayed in the UI, but they affect the calculation of related pages.|

Beneath the frontmatter, describe the error and its solution in normal Markdown.
You can also use any other components allowed within the docs site.

The entry shows up on the troubleshooting pages for its associated products and
topics. If the page doesn't already exist, add an entry for it in the page
index, setting `type` to `placeholder`. For more information, see the section on
[page index layout](#page-indexjs-layout).

### Editing the API section

There is a specific format for the API section which consists of:

*   **Function name** with empty parentheses (if function takes arguments). Ex. `add_dimension()`
*   A brief, specific description of the function
*   Any warnings necessary
*   **Required Arguments**
    *   A table with columns for "Name," "Type," and "Description"
*   **Optional Arguments**
    *   A table with columns for "Name," "Type," and "Description"
*   Any specific instructions about the arguments, including valid types
*   **Sample Usage**
    *   One or two literal examples of the function being used to demonstrate argument syntax.

See the API file to get an idea.
