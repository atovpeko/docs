# Contribute to Timescale documentation

Timescale documentation is open for contribution from all community members. The current documentation source is in this repository. The previous source is in the deprecated repository called [docs.timescale.com-content][legacy-source].

This document explains the process and guidelines to follow when contributing.

## Contribution process

You can contribute to Timescale documentation in the following ways:

- [Create an issue][docs-issues] in this repository and describe the proposed change. Our doc team will take care of it. 
- [Fork this repository][github-fork] and propose changes in the fork.
- If you have a write access to this repository, create a branch from `latest` and raise a pull request directly. 

When raising a PR, you will be prompted to sign a Contributor License Agreement (CLA). This helps to ensure that the community is free to use your contributions.

The documentation site is statically generated with [Gatsby][gatsby]. Its source code is in a separate private 
repository, which pulls in the content from this repository on each build.

Once you raise a PR for any branch, GitHub will **automatically** generate a preview for your changes and attach the link in the comments. Any new commits will be visible at the same URL. If you don't see the latest changes, try an incognito browser window.

## Documentation guidelines

This section provides pointers on how to write, structure, and organize your contribution. Do not worry if you don't get it right on the first try - our documentation team is always there to help.

### Language

Aim to write in a clear, concise, and actionable manner. Timescale documentation uses the [Google Developer Documentation Style Guide][google-style] with the following exceptions:

- Do not capitalize the first word after a colon.
- Use code font (back ticks) for UI elements instead of bold.

### Documentation structure

#### Individual page structure 

Each major doc section has a dedicated directory with `.md` files inside, representing its child pages. This includes an `index.md` file that serves as a landing page for that doc section by default, unless specifically changed in the navigation tree. To edit a page, modify the corresponding `.md` file following these recommendations: 

- **Regular pages**: use your judgement and other pages for reference when deciding how to organize your contribution. Split your page into logical paragraphs, use visual aids, and link to other resources where necessary.
- **API pages** should include:

  - The function name, with empty parentheses if it takes arguments. 
  - A brief, specific description of the function, including any possible warnings. 
  - One or two samples of the function being used to demonstrate argument syntax.
  - An argument table with Name, Type, Default, Required, Description columns.
  - A return table with Column, Type, and Description columns.

- **Troubleshooting pages** are not written as whole Markdown files, but are programmatically assembled from individual files in the`_troubleshooting` folder. Each entry describes a single troubleshooting case and its solution, and contains the following front matter:
    
    |Key| Type                                                 |Required| Description                                                                                                                                                                          |
    |-|------------------------------------------------------|-|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    |`title`| string                                               |Yes| The title of the troubleshooting entry, displayed as a heading above it                                                                                                              |
    |`section`| The literal string `troubleshooting`                 |Yes| Must be `troubleshooting`, used to identify troubleshooting entries during site build                                                                                                |
    |`products` or `topics`| array of strings                                     |Yes (can have either or both, but must have at least one)| The products or topics related to the entry. The entry will show up on the troubleshooting pages for the listed products and topics.                                                 |
    |`errors`| object of form `{language: string, message: string}` |No| The error, if any, related to the troubleshooting entry. Displayed as a code block right underneath the title. `language` is the programming language to use for syntax highlighting. |
    |`keywords`| array of strings                                     |No| These are displayed at the bottom of every troubleshooting page. Each keyword links to a collection of all pages associated with that keyword.                                       |
    |`tags`| array of strings                                     |No| Concepts, actions, or things associated with the troubleshooting entry. These are not displayed in the UI, but they affect the calculation of related pages.                         |
    
    Beneath the front matter, describe the error and its solution in regular Markdown. You can also use any other components allowed within the docs site.
    
    The entry shows up on the troubleshooting pages for its associated products and topics. If the page doesn't already exist, add an entry for it in the page
    index, setting `type` to `placeholder`. See [Navigation tree](#navigation-tree).

#### Navigation tree

The navigation hierarchy of a doc section is governed by `page-index/page-index.js` within the corresponding directory. To change the structure, for example, add or delete pages in a section, modify the corresponding `page-index.js`.

An entry in a `page-index.js` includes the following fields: 

|Key|Type|Required| Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-|-|-|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|`href`|string|Yes| The URL segment to use for the page. If there is a corresponding Markdown file, `href` must match the name of the Markdown file, minus the file extension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|`title`|string|Yes| The title of the page, used as the page name within the TOC on the left.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|`excerpt`|string|No| The short description of the page, used for the page card if `pageComponents` is set to `featured-cards`. See `pageComponents` for details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|`type`|One of `[directory, placeholder, redirect-to-child-page]`|No| If no type is specified, the page is built as a regular webpage. The structure of its children, if present, is defined by `children` entries and the corresponding structure of subfolders.  If the type is `directory`, the corresponding file becomes a directory. The difference of the directory page is that its child pages sit at the same level as the `directory` page. They only become children during the site build. If the type is `placeholder`, the corresponding page is produced programmatically upon site build. If not produced, the link in the navigation tree returns a 404. In particular, this is used for troubleshooting pages. If the type is `redirect-to-child-page`, no page is built and the link in the navigation tree goes directly to the first child. |
|`children`|Array of page entries|No| Child pages of the current page. For regular pages, the children should be located in a directory with the same name as the parent. The parent is the `index.md` file in that directory. For`directory` pages, the children should be located in the same directory as the parent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
`pageComponents`|One of `[['featured-cards'], ['content-list']]`|No| Any page that has child pages can list its children in either card or list style at the bottom of the page. Specify the desired style with this key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|`featuredChildren`| Array of URLs| No| Similar to `pageComponents`, this displays the children of the current page, but only the selected ones.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|`index`|string|No| If a section landing page needs to be different from the `index.md` file in that directory, this field specifies the corresponding Markdown file name. | 

#### Partials

Partials allow you to reuse snippets of content in multiple places. All partials
live in the `_partials` top-level directory. To make a new partial, create a new
`.md` file in this directory. The filename must start with an underscore. Then import it into the target page and reference in the relevant place. See [Formatting examples](_formatting_examples.md).

### Formatting

In addition to all the [regular Markdown formatting][markdown-syntax], the following elements are available for Timescale docs:

- Procedure blocks 
- Highlight blocks
- Tabs
- Custom code blocks
- Multi-tab code blocks
- Tags

See [Formatting examples](_formatting_examples.md) for how to use them. 

### Variables

Timescale documentation uses variables for its product names, features, and UI elements in Timescale Console with the following syntax: `$VARIABLE_NAME`. Variables do not work inside the following: 

- Front matter on each page
- HTML tables

The main variables include the following:

COMPANY = Timescale
COMPANY_URL = https://www.timescale.com
CLOUD_LONG = Timescale Cloud
TIMESCALE_DB = TimescaleDB
CONSOLE = Timescale Console
CONSOLE_URL = https://console.cloud.timescale.com/
SERVICE_LONG = Timescale Cloud service
SERVICE_SHORT = service

The list of variables is an ever-evolving document. Rely on the help of our doc team to apply all relevant ones when reviewing your contribution. 

### Links

Links should be reference-style links where the link address is at the bottom of the page. 

- Internal page links: internal links do not need to include the domain name `https://docs.timescale.com`. Use the `:currentVersion:` variable instead of `latest` in the URL.
- External links: input external links as is. 

See [Formatting examples](_formatting_examples.md) for details. 

### Visuals

When adding screenshots to the docs, aim for a full-screen view to provide better context. Attach the image to your issue or PR, and the doc team will upload and insert it for you.

### SEO optimization 

To make a documentation page more visible and clear for Google: 

- Include a `title` and `excerpt` meta tags at the top of the page. These represent meta title and description required for SEO optimization.

  - `title`: up to 60 characters, a short description of the page contents. In most cases a variation of the page title. 
  - `excerpt`: under 200 characters, a longer description of the page contents. In most cases a variation of the page intro. 

- Summarize each paragraph contents in the first sentence of that paragraph. 
- Include main page keywords into the meta tags, page title, first header, and intro. 

[legacy-source]: https://github.com/timescale/docs.timescale.com-content
[docs-issues]: https://github.com/timescale/docs/issues
[github-fork]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
[gatsby]: https://www.gatsbyjs.com/
[google-style]: https://developers.google.com/style
[markdown-syntax]: https://www.markdownguide.org/extended-syntax/
[github-docs]: https://github.com/timescale/docs
