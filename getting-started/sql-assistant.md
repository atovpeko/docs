---
title: Write SQL faster using AI
excerpt: Write SQL faster and more accurately with SQL assistant 
products: [cloud]
layout_components: [next_prev_large]
content_group: Getting started
---

# Write more accurate SQL faster using AI 

SQL Assistant in [$CONSOLE][portal-data-mode] helps you write, fix, and organize SQL faster and more accurately.

<div class="relative w-fit mx-auto">

<iframe width="1120" height="630" style="max-width:100%"  src="https://www.youtube.com/embed/3Droej_E0cQ?si=C4RoL_PFpr8E5QtC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>

## Key Capabilities

SQL Assistant offers a range of features to improve your SQL workflow, including:

- **Real-Time Help**: SQL Assistant provides in-context help for writing and understanding SQL. Use it to:

  - **Understand functions**: need to know how functions like `LAG()` or `ROW_NUMBER()` work? SQL Assistant explains it with examples.
  - **Interpret complex queries**: SQL Assistant breaks down dense queries, giving you a clear view of each part.

- **Error resolution**: SQL Assistant diagnoses errors as they happen, you can resolve issues without leaving your editor. Features include:

  - **Error debugging**: if your query fails, SQL Assistant identifies the issue and suggests a fix.
  - **Performance tuning**: for slow queries, SQL Assistant provides optimization suggestions to improve performance immediately.

- **Query organization**: To keep your query library organized, and help your team understand the 
  purpose of each query, SQL Assistant automatically adds titles and summaries to your queries.

## Limitations to keep in mind

For best results with SQL Assistant:

* **Schema Awareness**: SQL Assistant references schema data but may need extra context
  in complex environments. Specify tables, columns, or joins as needed.
* **Business Logic**: SQL Assistant does not inherently know specific business terms
  such as _active user_. Define these terms clearly to improve results.


### Security, privacy and data usage

Security and privacy is prioritized in $CONSOLE. In [Data Mode][portal-data-mode], project members
manage SQL Assistant settings under [**User name** > **Settings** > **SQL Assistant**][sql-editor-settings].

![SQL Assistant settings](https://assets.timescale.com/docs/images/sql-editor-preferences.png)

SQL Assistant settings are:
* **Opt-In Features**: all AI features are off by default. Only [members][project-members] of your $CLOUD_LONG project
  can enable them.
* **Data Protection**: your queries and data remain private and are not used for AI training.
  SQL Assistant operates with strict security protocols.
* **Data Usage**: to provide AI support, $COMPANY may share the query title, description and body, also the
  database connection type such as PostgreSQL, and the schema.
* **Sample data**: to give the LLM more context so you have better SQL suggestions, enable sample data sharing in the
  SQL assistant preferences.
* **Telemetry**: To improve SQL Assistant, $COMPANY collects telemetry and usage data, including prompts, responses,
  and query metadata.

## Pricing

SQL Assistant is currently free for all users. In the future, limits or paid options may be
introduced as we work to build the best experience.



[project-members]: /use-timescale/:currentVersion:/members/
[console]: https://console.cloud.timescale.com
[sql-editor-settings]: https://console.cloud.timescale.com/dashboard/settings?popsql=%2Fpreferences%2Fai
[portal-data-mode]: https://console.cloud.timescale.com/dashboard/services?popsql
