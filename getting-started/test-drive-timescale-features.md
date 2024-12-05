---
title: Test drive Timescale features
excerpt: Improve database performance with Hypertables, time bucketing, compression and continuous aggregates.
products: [cloud]
content_group: Getting started
---

# Test drive Timescale features

This page shows you how to import time-series data into a hypertable, improve query 
speed on frequently accessed data in high performance storage by aggregating it 
into time buckets and setting up continuous aggregates based on the time buckets. 
Finally, you reduce storage charges by compressing frequently accessed data older than 
a certain time interval, then set up tiered storage for rarely accessed data.  

## Prerequisites

Either:
- A [Timescale Cloud service][create-a-service] with time-series and ai and vector capabilities enabled.
- A [self-hosted PostgreSQL deployment][deploy-self-hosted] with the TimescaleDB, pgvector, pgvectorscale and
  pgai extensions enabled in your database.


## Organize time-series data in hypertables

Hypertables are PostgreSQL tables that help you improve insert and query
performance by automatically partition your data by time. Each hypertable is made
up of child tables called chunks. Each chunk is assigned a range of time, and only
contains data from that range. Hypertables exist alongside regular PostgreSQL tables.
You use regular PostgreSQL tables for relational data, and interact with hypertables
and regular PostgreSQL tables in the same way.

This section shows you how to create regular tables and hypertables, and import
relational and time-series data from external files.

<Procedure>

1.  **Import some time-series data into your hypertable**

    1. Unzip <Tag type="download">[real_time_stock_data.zip](https://assets.timescale.com/docs/downloads/get-started/real_time_stock_data.zip)</Tag> to a `<local folder>`.

       The dataset contains second-by-second stock-trade data for the top 100 most-traded symbols
       and a regular table of company symbols and company names. The stock-trade data is already 
       organized for you in a hypertable.

    1. Upload data from the CSV files to your $SERVICE_SHORT:
    
       <Tabs label="Upload data to ">

       <Tab title="Timescale Console">
       
          The $CONSOLE data upload creates the tables for you from the data you are uploading:   
          1. In [$CONSOLE][portal-ops-mode], select the service to add data to, then click **Actions** > **Upload CSV**.
          1. Drag `<local folder>/tutorial_sample_company.csv`.
          1. Change `New table name` to `company`, then click `Upload CSV`.
          1. Use the same process to upload `<local folder>/tutorial_sample_tick.csv` to the `stocks_real_time` table.
        
       </Tab>
        
       <Tab title="psql">

       1. In Terminal, navigate to `<local folder>` and connect to your $SERVICE_SHORT.
          ```bash
          psql -d "postgres://<username>:<password>@<host>:<port>/<database-name>"
          ```
          The connection information for a $SERVICE_SHORT is available in the file you downloaded when you created it.
      
       2. Create tables for the data to import
      
          - For the time-series data:
             1. In your sql client, create a normal PostgreSQL table:
      
                ```sql
                CREATE TABLE stocks_real_time (
                  time TIMESTAMPTZ NOT NULL,
                  symbol TEXT NOT NULL,
                  price DOUBLE PRECISION NULL,
                  day_volume INT NULL
                );
                ```
             1.  Convert `stocks_real_time` to a hypertable:
                ```sql
                SELECT create_hypertable('stocks_real_time', by_range('time'));
                ```
      
          - For the relational data:
      
             In your sql client, create a normal PostgreSQL table:
             ```sql
             CREATE TABLE company (
              symbol TEXT NOT NULL,
              name TEXT NOT NULL
             );
            ```
               
       3. Upload the dataset to your $SERVICE_SHORT
          ```sql
          \COPY stocks_real_time from './tutorial_sample_tick.csv' DELIMITER ',' CSV HEADER;
          \COPY company from './tutorial_sample_company.csv' DELIMITER ',' CSV HEADER;
          ```
        
       </Tab>
        
       </Tabs>       

1.  **Have a quick look at your data**  

    You query hypertables in exactly the same way as you would a relational PostgreSQL table.
    Use one of the following SQL editors to run a query and see the data you uploaded:
    - **Data mode**:  write queries, visualize data, and share your results in [$CONSOLE][portal-data-mode] for all your $SERVICE_LONGs.
    - **SQL editor**: write, fix, and organize SQL faster and more accurately in [$CONSOLE][portal-ops-mode] for a $SERVICE_LONG.
    - **psql**: easily run queries on your $SERVICE_LONGs or self-hosted TimescaleDB deployment from Terminal.

    <TryItOutCodeBlock queryId="getting-started-srt-orderby" />

</Procedure>

You have imported time-series data into a hypertable. In the next section you see how   

To fully understand how hypertables work, see [About hypertables][about-hypertables].

## Write fast analytical queries on frequently access data using time buckets and continuous aggregates

Aggregation is a way of combing data to get insights from it. Average, sum, and count are all 
example of simple aggregates. However, with large amounts of data aggregation slows things down, quickly.
 
Continuous aggregates are a kind of hypertable that is refreshed automatically in 
the background as new data is added, or old data is modified. Changes to your dataset are tracked, 
and the hypertable behind the continuous aggregate is automatically updated in the background.

You use time buckets to create a continuous aggregate. Time buckets aggregate data in hypertables by time 
interval. For example, a 5-minute, 1-hour, or 3-day bucket. The data grouped in a time bucket use a single 
timestamp. Continuous aggregates minimize the number of records that you need to look up to perform your 
query.


This section show you how to run fast analytical queries using time buckets and continuous aggregates.

<Procedure>

1.  **Create a continuous aggregate**
  
    In a continuous aggregate, data grouped using a time bucket is stored in a 
    PostgreSQL `MATERIALIZED VIEW` in a hypertable. `timescaledb.continuous` ensures that this data
    is always up to date.
    In your SQL editors, use the following code to create a continuous aggregate on the real time data in
    the `stocks_real_time` table:

    ```sql
    CREATE MATERIALIZED VIEW stock_candlestick_daily
    WITH (timescaledb.continuous) AS
    SELECT
    time_bucket('1 day', "time") AS day,
    symbol,
    max(price) AS high,
    first(price, time) AS open,
    last(price, time) AS close,
    min(price) AS low
    FROM stocks_real_time srt
    GROUP BY day, symbol;
    ```

1.  **Have a quick look at your data**

    You query continuous aggregates exactly the same way as your other tables, enable [compression][compression]
    or [tiered storage][data-tiering]. You can even
    create [continuous aggregates on top of your continuous aggregates][hierarchical-caggs].

    To query the `stock_candlestick_daily` continuous aggregate for all stocks:

    <TryItOutCodeBlock queryId="getting-started-cagg" />

</Procedure>

## Reduce storage charges on older data using compression

Sigh

## Reduce storage charges for rarely accessed data using tiered storage

Sigh

[create-a-service]: /getting-started/:currentVersion:/services/
[deploy-self-hosted]: /self-hosted/:currentVersion:/install/
[connect-to-your-service]: /getting-started/:currentVersion:/run-queries-from-console/
[portal-ops-mode]: https://console.cloud.timescale.com/dashboard/services
[portal-data-mode]: https://console.cloud.timescale.com/dashboard/services?popsql
[about-hypertables]: /use-timescale/:currentVersion:/hypertables/about-hypertables/
[data-tiering]: /use-timescale/:currentVersion:/data-tiering/
[compression]: /use-timescale/:currentVersion:/compression/
[hierarchical-caggs]: /use-timescale/:currentVersion:/continuous-aggregates/hierarchical-continuous-aggregates/
