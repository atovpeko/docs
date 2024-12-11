---
title: Manage read replication
excerpt: Understand how read scaling works in Timescale
product: cloud
keywords: [replicas, scaling]
tags: [replicas, scaling, ha]
---

# Manage read replication

You use read replicas to power your read-intensive apps and business intelligence tooling. Using read replicas to serve
reads for your app removes load from the primary data instance, and enables your service to improve ingest performance.
This is particularly useful when read traffic is very spiky and risks impacting ingest performance, or where reads have
a lower priority to writes.

This page shows you how to create and manage read replicas.

import TC from "versionContent/_partials/ha-replication/_rr-tsc.mdx";
import MST from "versionContent/_partials/ha-replication/_rr-mst.mdx";
import SELF from "versionContent/_partials/ha-replication/_rr-self.mdx";
import Prereqs from "versionContent/_partials/_prerequisites.mdx";

## Prerequisites

<Prereqs />

<Tabs label="Platform dependent implementations">

<Tab title="Timescale Cloud">

<TC />

</Tab>

<Tab title="MST">

<MST />

</Tab>

<Tab title="Self-hosted">

<SELF />

</Tab>

</Tabs>

