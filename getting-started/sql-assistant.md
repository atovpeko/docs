---
title: SQL assistant
excerpt: Write SQL faster and more accurately with SQL assistant 
products: [cloud]
layout_components: [next_prev_large]
content_group: Getting started
---

# SQL Assistant 

SQL Assistant in [$CONSOLE][console] makes writing SQL faster and more accurate. Here’s how it streamlines your workflow:

## When to use SQL Assistant

SQL Assistant helps simplify SQL tasks and saves time:

- **Understand functions**: need clarification on functions like `LAG()` or `ROW_NUMBER()`? SQL Assistant explains functions with examples.
- **Diagnose errors**: if your query fails, SQL Assistant identifies the issue and suggests a fix.
- **Interpret complex queries**: get a step-by-step breakdown of each part of a dense query.
- **Optimize queries**: for slow-running queries, SQL Assistant suggests ways to improve performance on the spot.

## Demo

Try SQL Assistant directly in $CONSOLE to see how it helps with query generation, error diagnosis, and organization. 


## Limitations to keep in mind

For best results with SQL Assistant:

* **Schema Awareness**: SQL Assistant references schema data but may need extra context in complex environments. Specify tables, columns, or joins as needed.
* **Business Logic**: SQL Assistant does not inherently know specific business terms such as _active user_. Define these terms clearly to improve results.


### Security and Privacy

Security and privacy is prioritized in $CONSOLE:

* **Opt-In Features**: all AI features are off by default. Only [members][project-members] of your $CLOUD_LONG project can enable them.
* **Data Protection**: queries and data stay private, the are not used for AI training.
* **Secure Environment**: SQL Assistant operates under strict security protocols to protect your data.

You manage SQL Assistant settings in $CONSOLE under [**Timescale Project** > **Console Settings** > **SQL Assistant**][console-settings].


## Data usage and privacy

To provide AI support, $COMPANY may share the following data with our AI partners:

* Query title, description, and body.
* Database connection type such as PostgreSQL, and schema.
* Sample data, if enabled in $CONSOLE under [**Console Settings > AI > Sample data**][console-settings].

To improve performance, $COMPANY collects telemetry and usage data, such as prompts, responses, and query metadata.

## Current Pricing

SQL Assistant is currently free for all users in [$CONSOLE][console]. In the future, limits or paid options may be introduced as we enhance the experience.


### Availability

SQL Assistant is fully available in [$CONSOLE][console].


[project-members]: /use-timescale/:currentVersion:/members/
[console]: https://console.cloud.timescale.com
[console-settings]: https://console.cloud.timescale.com/dashboard/settings