---
api_name: create_hypertable()
excerpt: Create a hypertable
topics: [hypertables]
keywords: [hypertables, create]
api:
  license: apache
  type: function
---

# create_hypertable()

Replace a standard PostgreSQL relational table with a [hypertable][hypertable-docs]
that is partitioned on a single dimension. A hypertable is a PostgreSQL table that
automatically partitions your data by time. A dimension defines the way your data is partitioned.
All actions work on the resulting hypertable. For example, `ALTER TABLE`, and `SELECT`.
If the table to convert already contains data, set [migrate_data][migrate-data] to `TRUE`.
However, this may take a long time and there are limitations when the table contains foreign
key constraints.

You cannot run `create_hypertable()` on a table that is already partitioned using
[declarative partitioning][declarative-partitioning] or [inheritance][inheritance].

This page describes the generalized hypertable API introduced in TimescaleDB v2.13.
The [old interface for `create_hypertable` is also available](/api/:currentVersion:/hypertable/create_hypertable_old/).

## Samples

The examples in this section show you how to:

- Time partition a hypertable by time range
- Time partition a hypertable using composite columns and immutable functions
- Time partition a hypertable using ISO formatting

### Time partition a hypertable by time range

The following examples show different ways to convert the `conditions` relational table to a
hypertable:

- Convert with range partitioning on the `time` column:

  ```sql
  SELECT create_hypertable('conditions', by_range('time'));
  ```

- Convert with a [chunk_time_interval][chunk_time_interval] of 24 hours:
  Either:
  ```sql
  SELECT create_hypertable('conditions', by_range('time', 86400000000));
  ```
  or:
  ```sql
  SELECT create_hypertable('conditions', by_range('time', INTERVAL '1 day'));
  ```

- with range partitioning on the `time` column, do not raise a warning if `conditions` is already a hypertable:

  ```sql
  SELECT create_hypertable('conditions', by_range('time'), if_not_exists => TRUE);
  ```

### Time partition a hypertable using composite columns and immutable functions

The following example shows how to time partition the `measurements` relational table on a composite
column type using a range partitioning function.

1. Create the report type, then an immutable function that converts the column value into a supported column value:

    ```sql
    CREATE TYPE report AS (reported timestamp with time zone, contents jsonb);
    
    CREATE FUNCTION report_reported(report)
      RETURNS timestamptz
      LANGUAGE SQL
      IMMUTABLE AS
      'SELECT $1.reported';
    
    SELECT create_hypertable('measurements', by_range('report', partition_func => 'report_reported'));
    ```

1. Create the hypertable using the immutable function:
    ```sql
    SELECT create_hypertable('measurements', by_range('report', partition_func => 'report_reported'));
    ```

### Time partition a hypertable using ISO formatting

The following example shows how to time partition the `events` table on a `jsonb` (`event`) column
type, which has a top level `started` key that contains an ISO 8601 formatted timestamp:

```sql
CREATE FUNCTION event_started(jsonb)
    RETURNS timestamptz
    LANGUAGE SQL
    IMMUTABLE AS
  $func$SELECT ($1->>'started')::timestamptz$func$;

SELECT create_hypertable('events', by_range('event', partition_func => 'event_started'));
```

## Required arguments

|Name|Type|Description|
|-|-|-|
|`relation`|REGCLASS|Identifier of table to convert to hypertable.|
| `dimension` | DIMENSION_INFO | Dimension builder for the column to partition on. |

<table class="tg"><thead>
  <tr>
    <th >Name</th>
    <th >Type</th>
    <th >Default</th>
    <th >Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td ><code>relation</code></td>
    <td ><code>REGCLASS</code>  </td>
    <td ><code>-</code>  </td>
    <td >Identifier of table to convert to hypertable.</td>
  </tr>
  <tr>
    <td ><code>dimension</code></td>
    <td ><code>DIMENSION_INFO</code>  </td>
    <td ><code>-</code>  </td>
    <td >Dimension builder for the column to partition on.  </td>
  </tr>
</tbody>
</table>


## Optional arguments

<table class="tg"><thead>
  <tr>
    <th >Name</th>
    <th >Type</th>
    <th >Default</th>
    <th >Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td ><code>create_default_indexes</code></td>
    <td ><code>BOOLEAN</code></td>
    <td ><code>TRUE</code></td>
    <td >Create default indexes on time/partitioning columns.</td>
  </tr>
  <tr>
    <td ><code>if_not_exists</code></td>
    <td ><code>BOOLEAN</code></td>
    <td ><code>FALSE</code></td>
    <td >Set to <code>TRUE</code> to raise an exception if is <code>relation</code> is already a hypertable. 
        By default only a warning is printed. </td>
  </tr>
  <tr>
    <td ><code>migrate_data</code></td>
    <td ><code>BOOLEAN</code></td>
    <td ><code>FALSE</code></td>
    <td >Set to <code>TRUE</code> to migrate any existing data in <code>relation</code> in to chunks in the new hypertable.

  <p>
  Depending on the amount data to be migrated, setting <code>migrate_data</code> can lock the table for a significant 
amount of time. <code>create_hypertable()</code> can also run into deadlock if there are foreign key 
 <a href="https://docs.timescale.com/use-timescale/latest/schema-management/about-constraints/">constraints</a> to other
tables. A hypertable can contain foreign keys to normal SQL table columns, but the reverse is not allowed. 
<code>UNIQUE</code> and <code>PRIMARY</code> constraints must include the partitioning key.</p>

  <p>Deadlock may happen when concurrent transactions simultaneously try to insert data into tables that are referenced
  in the foreign key constraints, and into the converting table itself. To avoid deadlock, manually obtain a
  <a href="https://www.postgresql.org/docs/current/sql-lock.html">SHARE ROW EXCLUSIVE</a> lock on the referenced tables 
  before you call <code>create_hypertable</code> in the same transaction.</p>
  <p>If you leave <code>migrate_data</code> set to the default, non-empty tables generate an error when you call 
<code>create_hypertable</code></p>
    </td>
  </tr>
</tbody>
</table>

## Returns

|Column|Type| Description                                                                                                 |
|-|-|-------------------------------------------------------------------------------------------------------------|
|`hypertable_id`|INTEGER| The ID of the hypertable you created.                                                                   |
|`created`|BOOLEAN| `TRUE` when the hypertable is created. `FALSE` when `if_not_exists` is `true` and no hypertable was created. |

<Highlight type="note">

If you call `SELECT * FROM create_hypertable(...)` the return value is formatted as a table with column headings.

</Highlight>



<Highlight type="note">
You The time column in `create_hypertable` must be defined as `NOT NULL`. If this is
not already specified on table creation, `create_hypertable` automatically adds
this constraint on the table when it is executed.
</Highlight>

#### Dimension info

When creating a hypertable, you need to provide dimension info using
one of the [dimension builders][dimension-builders]). This is used to
specify what column to partition by and in what way to partition.


[create_distributed_hypertable]: /api/:currentVersion:/distributed-hypertables/create_distributed_hypertable
[hash-partitions]: /use-timescale/:currentVersion:/hypertables/about-hypertables/#hypertable-partitioning
[hypertable-docs]: /use-timescale/:currentVersion:/hypertables/
[dimension-builders]: /api/:currentVersion:/hypertable/dimension_info
[by-range]: /api/:currentVersion:/hypertable/dimension_info/#by_range
[declarative-partitioning]: https://www.postgresql.org/docs/current/ddl-partitioning.html#DDL-PARTITIONING-DECLARATIVE
[inheritance]: https://www.postgresql.org/docs/current/ddl-partitioning.html#DDL-PARTITIONING-USING-INHERITANCE
[migrate-data]: /api/:currentVersion:/hypertable/create_hypertable/#optional-arguments
[chunk_time_interval]: /api/:currentVersion:/hypertable/set_chunk_time_interval/
[about-constraints]: /use-timescale/:currentVersion:/schema-management/about-constraints
[share-row-exclusive]: https://www.postgresql.org/docs/current/sql-lock.html
