# Formatting examples 

This page explains how to use the formatting available for Timescale documentation and how it renders on the website. Note that for most elements, spacing is important. 

## Procedure

```text
  <Procedure>

  1.  **Step 1 summary in bold**

      Optional step 1 explanation and details.

      ```
      step 1 code
      ```

  1.  `<Optional />` **Step 2 summary in bold**

      Optional step 2 explanation and details.

      ```
      step 2 code
      ```

  </Procedure>
```
  
## Highlight blocks

```text
<Highlight type="note">
Additional relevant information worth highlighting.
</Highlight>

<Highlight type="important">
Important things to keep in mind.
</Highlight>

<Highlight type="warning">
Caution!
</Highlight>

<Highlight type="deprecation">
A deprecation notice.
</Highlight>

<Highlight type="cloud">
A note dealing specifically with Timescale Cloud.
</Highlight>

```

## Tabs

```text

<Tabs label="Description of section, used for accessibility">

<Tab title="First tab title">

First tab content

</Tab>

<Tab title="Second tab title">

Second tab content

</Tab>

</Tabs>
```

## Custom code blocks 

Use the `CodeBlock` component with `canCopy` and `showLineNumbers` set to `false` to remove line numbers and the copy button from the native Markdown code blocks.

```text
<CodeBlock canCopy={false} showLineNumbers={false} children={`
code 
code 
code
`} />
```

## Multi-tab code blocks

    <Terminal>
    
    <tab label='ruby'>
    
    ```ruby
    ruby code
    ```
    
    </tab>
    
    <tab label="python-1">
    
    ```python
    pyhon code
    ```
    
    </tab>
    
    <tab label="python-2">
    
    ```python
    different python code
    ```
    
    </tab>
    
    </Terminal>


## Tags

Use tags to indicate links to downloadable files or metadata about functions. By default, tags have a solid background and gray text. There is also a hollow
variant.

```text
<Tag type="download">Markdown link to download</Tag>

<Tag type="experimental" content="Experimental" /> or <Tag type="experimental-toolkit" content="Experimental" 

<Tag type="toolkit" content="Toolkit" />

<Tag type="community" content="Community" />

<Tag variant="hollow">Text to display in a tag</Tag>
```

## Partials

`import PartialName from 'versionContent/_partials/_partial-name.mdx';`

Other page content goes here

`<PartialName />`

## Links

```text
[In-line internal link](URL)

[In-line external link](URL)


[Reference style link][reference]

[reference]: URL
```

## Variables 

- Syntax: `$VARIABLE_NAME`

