---
title: Manage high availability
excerpt: Set up HA replicas on Timescale for high availability
products: [cloud]
keywords: [high availability, replicas]
tags: [failover, availability zones, replication, wal]
cloud_ui:
    path:
        - [services, :serviceId, operations, replication]
---


# Manage high availability

You use High Availability(HA) replicas for apps with very low tolerance for downtime. HA replicas 
significantly reduce the risk of downtime and data loss due to system failure, and enable services to 
avoid downtime during routine maintenance.

import NATC from "versionContent/_partials/_self-hosted-not-available.mdx";
import TC from "versionContent/_partials/ha-replication/_ha-tsc.mdx";
import SELF from "versionContent/_partials/ha-replication/_ha-self.mdx";
import Prereqs from "versionContent/_partials/_prerequisites.mdx";

## Prerequisites

<Prereqs />

<Tabs label="Platform dependent implementations">

<Tab title="Timescale Cloud">

<TC />

</Tab>

<Tab title="MST">

<NATC />

</Tab>

<Tab title="Self-hosted">

<SELF />

</Tab>

</Tabs>
