---
title: PostgreSQL extensions
excerpt: Use PostgreSQL extensions with your Timescale service
products: [cloud]
keywords: [services, settings, extensions]
tags: [extensions]
---

# PostgreSQL extensions

You can use PostgreSQL extensions with Timescale. These are the currently
supported extensions:

<!-- vale Vale.Spelling = NO -->

| Extension                                        | Description                                                            | Enabled for service capability |
|--------------------------------------------------|------------------------------------------------------------------------|--------------------------------|
| [amcheck][amcheck]                               | Functions for verifying relation integrity                             | -                              | 
| [autoinc][autoinc]                               | Functions for autoincrementing fields                                  | -                              | 
| [bloom][bloom]                                   | Bloom access method - signature file-based index                       | -                              |
| [bool_plperl][bool_plper]                        | Transform between bool and plperl                                      | -                              | 
| [btree_gin][btree_gin]                           | Support for indexing common datatypes in GIN                           | -                              |
| [btree_gist][btree_gist]                         | Support for indexing common datatypes in GiST                          | -                              |
| [citext][citext]                                 | Data type for case-insensitive character strings                       | -                              |
| [cube][cube]                                     | Data type for multidimensional cubes                                   | -                              |
| [dict_int][dict_int]                             | Text search dictionary template for integers                           | -                              |
| [dict_xsyn][dict_xsyn]                           | Text search dictionary template for extended synonym processing        | -                              |
| [earthdistance][earthdistance]                   | Calculate great-circle distances on the surface of the Earth           | -                              |
| [fuzzystrmatch][fuzzystrmatch]                   | Determine similarities and distance between strings                    | -                              |
| [hstore][hstore]                                 | Data type for storing sets of (key, value) pairs                       | -                              |
| [hstore_plperl][hstore]                          | Transform between hstore and plperl                                    | -                              |
| [insert_username][insert_username]               | Functions for tracking who changed a table                             | -                              |
| [intagg][intagg]                                 | Integer aggregator and enumerator (obsolete)                           | -                              |
| [intarray][intarray]                             | Functions, operators, and index support for 1-D arrays of integers     | -                              |
| [isn][isn]                                       | Data types for international product numbering standards               | -                              |
| [jsonb_plperl][jsonb_plperl]                     | Transform between jsonb and plperl                                     | -                              | 
| [lo][lo]                                         | Large object maintenance                                               | -                              |
| [ltree][ltree]                                   | Data type for hierarchical tree-like structures                        | -                              |
| [moddatetime][moddatetime]                       | Functions for tracking last modification time                          | -                              |
| [old_snapshot][old_snapshot]                     | Utilities in support of `old_snapshot_threshold`                       | -                              |
| [pg_freespacemap][pg_freespacemap]               | Examine the free space map (FSM)                                       | -                              |
| [pg_prewarm][pg_prewarm]                         | Prewarm relation data                                                  | -                              |
| [pg_stat_statements][pg_stat_statements]         | Track execution statistics of all SQL statements executed              | All                            |
| [pg_trgm][pg_trgm]                               | Text similarity measurement and index searching based on trigrams      | -                              |
| [pg_visibility][pg_visibility]                   | Examine the visibility map (VM) and page-level visibility info         | -                              |
| [pgai][pgai]                                     | Helper functions for AI workflows                                      | All                            |
| [pgaudit][pgaudit]                               | Detailed session and/or object audit logging                           | -                              |
| [pgcrypto][pgcrypto]                             | Cryptographic functions                                                | -                              |
| [pgpcre][pgpcre]                                 | Perl-compatible RegEx                                                  | -                              |
| [pgrouting][pgrouting]                           | Geospatial routing functionality                                       | -                              |
| [pgrowlocks][pgrowlocks]                         | Show row-level locking information                                     | -                              |
| [pgstattuple][pgstattuple]                       | Obtain tuple-level statistics                                          | -                              |
| [pgvector][pgvector]                             | Vector similarity search for PostgreSQL                                | AI and vector services         |
| [pgvectorscale][pgvectorscale]                   | Advanced indexing for vector data                                      | AI and vector services         | 
| [plperl][plperl]                                 | PL/Perl procedural language                                            | -                              |
| [plpgsql][plpgsql]                               | SQL procedural language                                                | All                            |
| [postgis][postgis]                               | PostGIS geometry and geography spatial types and functions             | -                              |
| [postgis_raster][postgis_raster]                 | PostGIS raster types and functions                                     | -                              |
| [postgis_sfcgal][postgis_sfcgal]                 | PostGIS SFCGAL functions                                               | -                              |
| [postgis_tiger_geocoder][postgis_tiger_geocoder] | PostGIS tiger geocoder and reverse geocoder                            | -                              |
| [postgis_topology][postgis_topology]             | PostGIS topology spatial types and functions                           | -                              |
| [postgres_fdw][postgres-fdw]                     | Foreign data wrappers                                                  | -                              |
| [refint][refint]                                 | Functions for implementing referential integrity (obsolete)            | -                              |
| [seg][seg]                                       | Data type for representing line segments or floating-point intervals   | -                              |
| [sslinfo][sslinfo]                               | Information about SSL certificates                                     | -                              |
| [tablefunc][tablefunc]                           | Functions that manipulate whole tables, including crosstab             | -                              |
| [tcn][tcn]                                       | Trigger change notifications                                           | -                              |
| [timescale_vector][timescale_vector]             | Advanced indexing for vector data                                      | -                              |
| [timescaledb_toolkit][timescaledb_toolkit]       | TimescaleDB Toolkit                                                    | Time series and analytics      |
| [tsm_system_rows][tsm_system_rows]               | `TABLESAMPLE` method which accepts the number of rows as a limit       | -                              |
| [tsm_system_time][tsm_system_time]               | `TABLESAMPLE` method which accepts the time in milliseconds as a limit | -                              |
| [unaccent][unaccent]                             | Text search dictionary that removes accents                            | -                              |
| [unit][unit]                                     | SI units for PostgreSQL                                                | -                              |
| [uuid-ossp][uuid-ossp]                           | Generate universally unique identifiers (UUIDs)                        | -                              |

<!-- vale Vale.Spelling = YES -->

[amcheck]: https://www.postgresql.org/docs/current/amcheck.html
[autoinc]: https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-AUTOINC
[bloom]: https://www.postgresql.org/docs/current/bloom.html
[bool_plper]: https://www.postgresql.org/docs/17/plperl-funcs.html
[btree_gin]: https://www.postgresql.org/docs/current/btree-gin.html
[btree_gist]: https://www.postgresql.org/docs/current/btree-gist.html
[citext]: https://www.postgresql.org/docs/current/citext.html
[cube]: https://www.postgresql.org/docs/current/cube.html
[dict_int]: https://www.postgresql.org/docs/current/dict-int.html
[dict_xsyn]: https://www.postgresql.org/docs/current/dict-xsyn.html
[earthdistance]: https://www.postgresql.org/docs/current/earthdistance.html
[fuzzystrmatch]: https://www.postgresql.org/docs/current/fuzzystrmatch.html
[hstore]: https://www.postgresql.org/docs/current/hstore.html
[insert_username]: https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-INSERT-USERNAME
[intagg]: https://www.postgresql.org/docs/current/intagg.html
[intarray]: https://www.postgresql.org/docs/current/intarray.html
[isn]: https://www.postgresql.org/docs/current/isn.html
[jsonb_plperl]: https://www.postgresql.org/docs/current/datatype-json.html#DATATYPE-JSON-TRANSFORMS
[lo]: https://www.postgresql.org/docs/current/lo.html
[ltree]: https://www.postgresql.org/docs/current/ltree.html
[moddatetime]: https://www.postgresql.org/docs/current/contrib-spi.html#CONTRIB-SPI-MODDATETIME
[old_snapshot]: https://www.postgresql.org/docs/16/oldsnapshot.html
[pg_freespacemap]: https://www.postgresql.org/docs/current/pgfreespacemap.html
[pg_prewarm]: https://www.postgresql.org/docs/current/pgprewarm.html
[pg_stat_statements]: https://www.postgresql.org/docs/current/pgstatstatements.html
[pg_trgm]: https://www.postgresql.org/docs/current/pgtrgm.html
[pg_visibility]: https://www.postgresql.org/docs/current/pgvisibility.html
[pgai]: /ai/:currentVersion:/
[pgaudit]: https://www.pgaudit.org/
[pgpcre]: https://github.com/petere/pgpcre
[pgrouting]: https://pgrouting.org/
[pgrowlocks]: https://www.postgresql.org/docs/current/pgrowlocks.html
[pgstattuple]: https://www.postgresql.org/docs/current/pgstattuple.html
[pgvector]: https://github.com/pgvector/pgvector
[pgvectorscale]: https://github.com/timescale/pgvectorscale
[plperl]: https://www.postgresql.org/docs/current/plperl.html
[plpgsql]: https://www.postgresql.org/docs/current/plpgsql.html
[postgis]: /use-timescale/:currentVersion:/extensions/postgis/
[postgis_raster]: https://postgis.net/docs/RT_reference.html
[postgis_sfcgal]: https://postgis.net/docs/reference_sfcgal.html
[postgis_tiger_geocoder]: https://postgis.net/docs/Extras.html#Tiger_Geocoder
[postgis_topology]: https://postgis.net/workshops/postgis-intro/topology.html
[postgres-fdw]: /use-timescale/:currentVersion:/schema-management/foreign-data-wrappers/
[refint]: https://postgrespro.com/docs/postgresql/9.6/contrib-spi#idp144721
[seg]: https://www.postgresql.org/docs/current/seg.html
[pgcrypto]: /use-timescale/:currentVersion:/extensions/pgcrypto/
[sslinfo]: https://www.postgresql.org/docs/current/sslinfo.html
[tablefunc]: https://www.postgresql.org/docs/current/tablefunc.html
[tcn]: https://www.postgresql.org/docs/current/tcn.html
[timescaledb_toolkit]: https://github.com/timescale/timescaledb-toolkit
[timescale_vector]: https://github.com/timescale/python-vector
[tsm_system_rows]: https://www.postgresql.org/docs/current/tsm-system-rows.html
[tsm_system_time]: https://www.postgresql.org/docs/current/tsm-system-time.html
[unaccent]: https://www.postgresql.org/docs/current/unaccent.html
[unit]: https://github.com/df7cb/postgresql-unit
[uuid-ossp]: https://www.postgresql.org/docs/current/uuid-ossp.html 
