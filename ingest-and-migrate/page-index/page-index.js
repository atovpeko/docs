module.exports = [
  {
    title: "Migrate and ingest data",
    href: "ingest-and-migrate",
    excerpt: "Migrating your data to Timescale",
    children: [
      {
        title: "Migrate with downtime",
        href: "pg-dump-and-restore",
        excerpt:
          "Migrate a hypertable or entire database with native PostgreSQL commands",
      },
      {
        title: "Live migration",
        href: "live-migration",
        excerpt: "Migrate a large database with low downtime",
      },
      {
        title: "Dual-write and backfill",
        href: "dual-write-and-backfill",
        excerpt: "Migrate a large database with low downtime",
        children: [
          {
            title: "Dual-write from TimescaleDB",
            href: "dual-write-from-timescaledb",
            excerpt:
              "Migrate from TimescaleDB using dual-write and backfill",
          },
          {
            title: "Dual-write from PostgreSQL",
            href: "dual-write-from-postgres",
            excerpt:
              "Migrate from PostgreSQL using dual-write and backfill",
          },
          {
            title: "Dual-write from other databases",
            href: "dual-write-from-other",
            excerpt:
              "Migrate from other databases using dual-write and backfill",
          },
          {
            title: "timescaledb-backfill",
            href: "timescaledb-backfill",
            excerpt:
              "A tool for backfilling data as part of data migration",
          },

        ],
      },
      {
        title: "Ingest data with Prometheus",
        href: "ingest-prometheus",
        excerpt: "Ingest data into Timescale from Prometheus",
      },
      {
        title: "Ingest data with Kafka",
        href: "ingest-kafka",
        excerpt: "Ingest data into Timescale from Kafka",
      },
      {
        title: "Ingest data with Timescale parallel copy",
        href: "about-timescaledb-parallel-copy",
        excerpt:
          "Quickly insert bulk data by parallelizing `COPY` operations",
      },
      {
        title: "Ingest data from a .csv file",
        href: "import-csv",
        excerpt:
          "Import data into your Timescale instance from an external .csv file",
      },
      {
        title: "FAQ and troubleshooting",
        href: "troubleshooting",
        excerpt:
          "Troubleshooting known issues in database migrations",
      },
    ],
  }
];
