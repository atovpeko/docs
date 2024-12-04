
<Procedure>

### Procedure Title

1.  Do this

  ```bash
  code code code
  ```

2.  Then do this

  ```ruby
  def function
    print('hello')
  ```

3.  TimescaleDB is a time-series database, built on top of PostgreSQL. More than that,
    however, it's a relational database for time-series. Developers who use TimescaleDB
    get the benefit of a purpose-built time-series database, plus a classic relational
    database (PostgreSQL), all in one, with full SQL support.

  ```python
  def start:
    print('start')
  ```

</Procedure>

<!-- Note the spacing and labeling are very important! -->
<Terminal>

<tab label='ruby'>

```ruby
class AddTimescale < ActiveRecord::Migration[5.2]
  def change
    enable_extension("timescaledb") unless extensions.include? "timescaledb"
  end
end
```

</tab>

<tab label="python-1">

```python
def start:
  if this:
    return

```

</tab>

<tab label="python-2">

```python
def different_python:
  return

```

</tab>

</Terminal>

const highlightTypes = ["note", "important", "warning", "cloud", "deprecation"];


Tabs

<Tabs label="Description of section, used for accessibility">

<Tab title="Title that is displayed on first tab">

Content goes here

</Tab>

<Tab title="Title that is displayed on second tab">

Content goes here

</Tab>

</Tabs>

Note that spacing is important.

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