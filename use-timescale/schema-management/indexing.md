---
title: Indexing data
excerpt: How to create indexes on hypertables
products: [cloud, mst, self_hosted]
keywords: [hypertables, indexes]
---

# Index data

To speed up read operations, you use an index on your database. As long as you include 
the `time` column, for time-series data You can create an index on any combination of 
columns. Timescale supports all table objects supported within PostgreSQL, including 
data types, indexes, and triggers.

You can create an index using the `CREATE INDEX` command. For example, to create
an index that sorts first by `location`, then by `time`, in descending order:

```sql
CREATE INDEX ON conditions (location, time DESC);
```

You can run this command before or after you 
[convert a regular PostgreSQL table to a hypertable][create_hypertable].

## Default indexes

Some indexes are created by default when you perform certain actions on your
database.

To create a hypertable with the default indexes, you can use either:
- [`create_hypertable`][create_hypertable]: a time index
  is created on your data. To manually create a time index, use the following command:

  ```sql
  CREATE INDEX ON conditions (time DESC);
  ```

- [`create_hypertable`][create_hypertable] with an optional hash partition: an additional index is created on the 
  optional column. For example, to add a hash partition to the `location` column 

  ```sql
  CREATE INDEX ON conditions (location, time DESC);
  ```

If you do not want to create these default indexes:
- Set `create_default_indexes` to `false` when you run the `create_hypertable` command.
  For example:

    ```sql
    SELECT create_hypertable('conditions', by_range('time'))
      CREATE_DEFAULT_INDEXES false;
    ```
  
  [`by_range`][by-range] is an addition [dimension builder][dimension_builders] since TimescaleDB v2.13.

For more information about the order to use when declaring indexes, see [about indexing][about-index].


## Best practices for indexing

If you have sparse data with columns that are often `NULL`, you can add 
the `WHERE column IS NOT NULL` clause to the index. This prevents the index from
indexing `NULL` data, and leads to a more compact and efficient index. For
example:

```sql
CREATE INDEX ON conditions (time DESC, humidity)
  WHERE humidity IS NOT NULL;
```

To define an index as a `UNIQUE` or `PRIMARY KEY` index, the index must include
the time column and the partitioning column, if you are using one. For example,
a unique index must include at least the `(time, location)` columns, in addition
to any other columns you want to use. Generally,
time-series data uses `UNIQUE` indexes more rarely than relational data.

If you do not want to create an index in a single transaction, use the [`CREATE_INDEX`][create-index] 
function. `CREATE INDEX` uses a separate function to create an index on each chunk,
rather than a single transaction for the entire hypertable. This means that you
can perform other actions on the table while the index is being created, rather
than having to wait until index creation is complete.

<Highlight type="note">

You can also use the
[PostgreSQL `WITH` clause](https://www.postgresql.org/docs/current/queries-with.html)
to perform indexing transactions on an individual chunk.

</Highlight>

[create_hypertable]: /api/:currentVersion:/hypertable/create_hypertable/
[about-index]: /use-timescale/:currentVersion:/schema-management/about-indexing/
[create-index]: https://docs.timescale.com/api/latest/hypertable/create_index/
[by-range]: /api/:currentVersion:/hypertable/create_hypertable/#by_range
[dimension_builders]: /api/:currentVersion:/create_hypertable/#dimension-info
