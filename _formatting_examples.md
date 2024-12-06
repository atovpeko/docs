# Formatting examples 

This page explains how to use the formatting available for Timescale documentation and how it renders on the website. Note that for most elements, spacing is important. 

## Procedure

```text
<Procedure>

1.  **Step 1 summary in bold**

    Step 1 explanation and details.

    ```
    step 1 code
    ```

1.  **Step 2 summary in bold** <Optional />

    Step 2 explanation and details.

    ```
    step 2 code
    ```

</Procedure>
```

![Procedure example](https://assets.timescale.com/docs/images/procedure-example.png)

The Optional tag is used to mark steps that are not required. 
  
## Highlight blocks

```text
<Highlight type="note">

Additional relevant information worth highlighting.

</Highlight>
```

![Note highlight](https://assets.timescale.com/docs/images/highlight-note.png)

```text
<Highlight type="important">

Important things to keep in mind.

</Highlight>
```

![Important highlight](https://assets.timescale.com/docs/images/highlight-important.png)

```text
<Highlight type="warning">

Caution!

</Highlight>
```

![Caution highlight](https://assets.timescale.com/docs/images/highlight-warning.png)

```text
<Highlight type="deprecation">

A deprecation notice.

</Highlight>
```

![Deprecated highlight](https://assets.timescale.com/docs/images/highlight-deprecation.png)

```text
<Highlight type="cloud">

A note dealing specifically with Timescale Cloud.

</Highlight>
```

![Cloud highlight](https://assets.timescale.com/docs/images/highlight-cloud.png)

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

![Tabs](https://assets.timescale.com/docs/images/tabs-example.png)

## Custom code blocks 

Use the `CodeBlock` component with `canCopy` and `showLineNumbers` set to `false` to remove line numbers and the copy button from the native Markdown code blocks.

```text
<CodeBlock canCopy={false} showLineNumbers={false} children={`
code 
code 
code
`} />
```

![Custom code block](https://assets.timescale.com/docs/images/custom-code-block-example.png)

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

![Multi-tab code block](https://assets.timescale.com/docs/images/multi-tab-code-block.png)

## Tags

```text
<Tag type="download">Markdown link to download</Tag>
```

```text
<Tag type="experimental" content="Experimental" /> or <Tag type="experimental-toolkit" content="Experimental"/> 
```

```text
<Tag type="toolkit" content="Toolkit" />
```

```text
<Tag type="community" content="Community" />
```

```text
<Tag variant="hollow">Text to display in a tag</Tag>
```

![Tags](https://assets.timescale.com/docs/images/tag-examples.png)

## Partials

```text
import PartialName from 'versionContent/_partials/_partial-name.mdx';

Page content preceding the partial.

<PartialName />

Page content following the partial.
```

## Links

```text
[anchor][reference-name]

Full page content goes here.

[reference-name]: /doc-section-name/:currentVersion:/path/to/page OR any external link
```


