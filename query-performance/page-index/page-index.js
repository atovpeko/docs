module.exports = [
  {
    title: "Query performance",
    href: "query-performance",
    filePath: "index.md",
    excerpt:
      "Install and manage your deployment, control user access, and integrate third party tooling",
    children: [
      {
        title: "Compress frequently accessed data",
        href: "compression",
        children: [
          {
            title: "About compression",
            href: "about-compression",
            excerpt: "Learn about how compression works",
          },
          {
            title: "About compression methods",
            href: "compression-methods",
            excerpt: "Learn about the different compression methods",
          },
          {
            title: "Backfill historical data",
            href: "backfill-historical-data",
            excerpt: "Backfill historical data to compressed chunks",
          },
          {
            title: "Compression design",
            href: "compression-design",
            excerpt: "The design of TimescaleDB compression",
          },
          {
            title: "Decompress chunks",
            href: "decompress-chunks",
            excerpt: "Decompress data chunks",
          },
          {
            title: "Enable a compression policy",
            href: "compression-policy",
            excerpt: "Create a compression policy on a hypertable",
          },
          {
            title: "Manual compression",
            href: "manual-compression",
            excerpt: "Compress data chunks",
          },
          {
            title: "Modify compressed data",
            href: "modify-compressed-data",
            excerpt: "Insert and modify data in compressed chunks",
          },
          {
            title: "Modify a schema",
            href: "modify-a-schema",
            excerpt: "Change the data schema in compressed chunks",
          },
          {
            title: "Troubleshooting",
            href: "troubleshooting",
            type: "placeholder",
          },
        ],
      },
      {
        title: "Connection pooling",
        href: "connection-pooling",
        excerpt:
          "Using a connection pool with your Timescale services",
      },
      {
        title: "Continuous aggregates",
        href: "continuous-aggregates",
        children: [
          {
            title: "About continuous aggregates",
            href: "about-continuous-aggregates",
            excerpt: "About continuous aggregates",
          },
          {
            title: "Compress continuous aggregates",
            href: "compression-on-continuous-aggregates",
            excerpt: "Compress continuous aggregates",
          },
          {
            title: "Create a continuous aggregate",
            href: "create-a-continuous-aggregate",
            excerpt: "Create continuous aggregates",
          },
          {
            title: "Create an index on a continuous aggregate",
            href: "create-index",
            excerpt:
              "Manage automatic index creation and manually create additional indexes",
          },
          {
            title: "Drop data from continuous aggregates",
            href: "drop-data",
            excerpt: "Drop data from continuous aggregates",
          },
          {
            title: "Hierarchical continuous aggregates",
            href: "hierarchical-continuous-aggregates",
          },
          {
            title: "Manage materialized hypertables",
            href: "materialized-hypertables",
            excerpt: "Manage materialized hypertables in continuous aggregates",
          },
          {
            title: "Migrate a continuous aggregate to the new form",
            href: "migrate",
            excerpt:
              "Migrate old continuous aggregates to the new form introduced in Timescale 2.7",
          },
          {
            title: "Real time aggregates",
            href: "real-time-aggregates",
            excerpt: "Manage real time aggregates in continuous aggregates",
          },
          {
            title: "Refresh policies for continuous aggregates",
            href: "refresh-policies",
            excerpt: "Manage refresh policies for continuous aggregates",
          },
          {
            title: "Time in continuous aggregates",
            href: "time",
            excerpt: "Manage time in continuous aggregates",
          },
          {
            title: "Troubleshoot continuous aggregates",
            href: "troubleshooting",
            type: "placeholder",
            excerpt: "Troubleshoot continuous aggregates",
          },
        ],
      },
      {
        title: "Ensure data availability and accessibility",
        href: "data-replication",
        excerpt: "Key concepts for working with pgvector data in PostgreSQL",
      },
      {
        title: "Hyperfunctions",
        href: "hyperfunctions",
        pageComponents: ["featured-cards"],
        featuredChildren: [
          "/use-timescale/:currentVersion:/hyperfunctions/function-pipelines",
          "/use-timescale/:currentVersion:/hyperfunctions/approx-count-distincts",
          "/use-timescale/:currentVersion:/hyperfunctions/stats-aggs",
          "/use-timescale/:currentVersion:/hyperfunctions/gapfilling-interpolation",
          "/use-timescale/:currentVersion:/hyperfunctions/percentile-approx",
          "/use-timescale/:currentVersion:/hyperfunctions/counter-aggregation",
          "/use-timescale/:currentVersion:/hyperfunctions/time-weighted-averages",
        ],
        children: [
          {
            title: "About hyperfunctions",
            href: "about-hyperfunctions",
            excerpt:
              "Learn about Timescale hyperfunctions for additional analysis",
          },
          {
            title: "Approximate count distincts",
            href: "approx-count-distincts",
            type: "directory",
            excerpt: "Count the number of unique values in a dataset",
            children: [
              {
                title: "Hyperloglog",
                href: "hyperloglog",
                tags: ["hyperfunctions", "toolkit", "query", "timescaledb"],
                excerpt: "Learn about the hyperloglog hyperfunction",
              },
            ],
          },
          {
            title: "Counter aggregation",
            href: "counter-aggregation",
            type: "directory",
            excerpt: "Calculate statistics from gauges and counters",
            children: [
              {
                title: "Counter aggregates",
                href: "counter-aggs",
                excerpt: "Learn about the counter aggregate hyperfunction",
              },
            ],
          },
          {
            title: "Function pipelines",
            href: "function-pipelines",
            excerpt:
              "Use functional programming to simplify complex SQL queries",
          },
          {
            title: "Gapfilling and interpolation",
            href: "gapfilling-interpolation",
            type: "directory",
            excerpt: "Fill in data collected at irregular time intervals",
            children: [
              {
                title: "Last observation carried forward",
                href: "locf",
                excerpt: "Learn about the locf hyperfunction",
              },
              {
                title: "Time bucket gapfill",
                href: "time-bucket-gapfill",
                excerpt:
                  "Learn about the time bucket gapfillling hyperfunction",
              },
            ],
          },
          {
            title: "Heartbeat aggregation",
            href: "heartbeat-agg",
            excerpt:
              "Build a model of system health from a series of health check timestamps",
          },
          {
            title: "Percentile approximation",
            href: "percentile-approx",
            type: "directory",
            excerpt: "Calculate percentiles",
            children: [
              {
                title: "Approximate percentile",
                href: "approximate-percentile",
                excerpt: "Learn about the approximate percentile hyperfunction",
              },
              {
                title: "Advanced aggregation methods",
                href: "advanced-agg",
                excerpt:
                  "Learn about advanced aggregation methods for hyperfunctions",
              },
            ],
          },
          {
            title: "Statistical aggregates",
            href: "stats-aggs",
            excerpt:
              "Calculate descriptive statistics and models, including averages, standard deviation, linear regression, and more",
          },
          {
            title: "Time-weighted averages",
            href: "time-weighted-averages",
            type: "directory",
            excerpt: "Calculate time-weighted averages",
            children: [
              {
                title: "Time-weighted averages",
                href: "time-weighted-average",
                excerpt: "Learn about the time-weighted averages hyperfunction",
              },
            ],
          },
          {
            title: "Troubleshoot hyperfunctions",
            href: "troubleshooting",
            type: "placeholder",
          },
        ],
      },
      {
        title: "Hypertables",
        href: "hypertables",
        children: [
          {
            title: "About hypertables",
            href: "about-hypertables",
            excerpt: "Learn about hypertables in Timescale",
          },
          {
            title: "Alter hypertables",
            href: "alter",
            excerpt: "Alter hypertables",
          },
          {
            title: "Change hypertable chunk intervals",
            href: "change-chunk-intervals",
            excerpt: "Change and view chunk time intervals for a hypertable",
          },
          {
            title: "Create hypertables",
            href: "create",
            excerpt: "Create hypertables",
          },
          {
            title: "Create unique indexes on hypertables",
            href: "hypertables-and-unique-indexes",
            excerpt: "Create hypertables with unique indexes",
          },
          {
            title: "Drop hypertables",
            href: "drop",
            excerpt: "Drop hypertables",
          },
          {
            title: "Troubleshoot hypertables",
            href: "troubleshooting",
            type: "placeholder",
            excerpt: "Troubleshooting and error fixes for hypertables",
          },
        ],
      },
      {
        title: "Time buckets",
        href: "time-buckets",
        excerpt: "Aggregate data by time interval with time buckets",
        children: [
          {
            title: "About time buckets",
            href: "about-time-buckets",
            excerpt: "Learn how time buckets work in Timescale.",
          },
          {
            title: "Troubleshoot problems with time buckets",
            href: "troubleshooting",
            type: "placeholder",
          },
          {
            title: "Use time buckets to group time-series data",
            href: "use-time-buckets",
            excerpt:
              "How to group time series data with the time_bucket function.",
          },
        ],
      },
    ],
  },
];

