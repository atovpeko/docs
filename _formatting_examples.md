
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