---
title: Manual logical backup
excerpt: Back up and restore a hypertable or an entire database using native PostgreSQL commands
keywords: [backups, restore]
tags: [recovery, logical backup, pg_dump, pg_restore]
---

# Manual logical backup

You can manually backup and restore using the native PostgreSQL [`pg_dump`][pg_dump] and [`pg_restore`][pg_restore]
commands. This also works for compressed hypertables, you don't have to decompress the chunks before you begin.

If you are using `pg_dump` to backup regularly, make sure you keep
track of the versions of PostgreSQL and TimescaleDB you are running. For more
information, see [Versions are mismatched when dumping and restoring a database][troubleshooting-version-mismatch].

import LB from "versionContent/_partials/backup-and-restore/_logical-backup.mdx";

<Tabs label="Platform dependent implementations">

<Tab title="Timescale Cloud">

<LB />

</Tab>

<Tab title="MST">

<LB />

</Tab>

<Tab title="Self-hosted">

<LB />

</Tab>

</Tabs>


[pg_dump]: https://www.postgresql.org/docs/current/static/app-pgdump.html
[pg_restore]: https://www.postgresql.org/docs/current/static/app-pgrestore.html
[troubleshooting-version-mismatch]: /self-hosted/:currentVersion:/troubleshooting/#versions-are-mismatched-when-dumping-and-restoring-a-database
