---
title: Ingest and migrate
excerpt: Migrate existing database to Timescale Cloud
products: [cloud]
keywords: [data migration, postgresql, RDS]
tags: [ingest, migrate, RDS]
---

import OpenSupportRequest from "versionContent/_partials/_migrate_open_support_request.mdx"

# Migrate your data to Timescale Cloud

You have chosen to migrate your data to Timescale Cloud, thank you. Depending on the amount of data 
you need to migrate, and the amount of downtime you can afford, we offer the following ways to migrate 
your data: 

| Migration strategy                         | Use when                                                                                                                    | Downtime requirements |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------------|
| [Migrate with downtime][pg-dump-restore]   | Use `pg_dump` and `pg_restore` to migrate when you can afford downtime.                                                     | Some downtime         |
| [Live migration][live-migration]           | Simplified end-to-end migration with almost zero downtime.                                                                  | Minimal downtime      |
| [Dual-write and backfill][dual-write]      | Append-only data, heavy insert workload (~20,000 inserts per second) when modifying your ingestion pipeline is not an issue. | Minimal downtime      |

All strategies work to migrate from PostgreSQL, TimescaleDB, AWS RDS, and Managed Service for Timescale. Migration 
assistance is included with Timescale support. If you encounter any difficulties while migrating your data,
consult the [troubleshooting] page, open a support request, or take your issue to the `#migration` channel
in the [community slack](https://slack.timescale.com/), the developers of this migration method are there to help.

<OpenSupportRequest />

If you're migrating your data from another source database type, best practice is export the data from your source database as 
a `.csv` file, then import to your Timescale Cloud Service using [timescaledb-parallel-copy][parallel-copy]. For other ingestion methods, 
see [Ingest data from other sources][data-ingest].



[data-ingest]: /use-timescale/:currentVersion:/ingest-data/
[dual-write]: /ingest-and-migrate/:currentVersion:/dual-write-and-backfill/
[pg-dump-restore]: /ingest-and-migrate/:currentVersion:/pg-dump-and-restore/
[parallel-copy]: /use-timescale/:currentVersion:/ingest-data/import-csv/
[troubleshooting]: /ingest-and-migrate/:currentVersion:/troubleshooting/
[live-migration]: /ingest-and-migrate/:currentVersion:/live-migration/
[pgcopydb]: https://github.com/dimitri/pgcopydb
[playbooks]: /ingest-and-migrate/:currentVersion:/playbooks/
