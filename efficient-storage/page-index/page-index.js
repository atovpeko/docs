module.exports = [
  {
    title: "Efficient storage",
    href: "efficient-storage",
    filePath: "index.md",
    excerpt:
      "Install and manage your deployment, control user access, and integrate third party tooling",
    children: [
      {
        title: "Ensure data availability and accessibility",
        href: "data-replication",
        excerpt: "Key concepts for working with pgvector data in PostgreSQL",
      },
      {
        href: "data-retention",
        excerpt: "Drop data by time value either automatically or manually",
        children: [
          {
            title: "About data retention",
            href: "about-data-retention",
            excerpt: "Learn about data retention in Timescale",
          },
          {
            title: "About data retention with continuous aggregates",
            href: "data-retention-with-continuous-aggregates",
            excerpt: "Using data retention policies with continuous aggregates",
          },
          {
            title: "Create a retention policy",
            href: "create-a-retention-policy",
            excerpt: "Create a data retention policy",
          },
          {
            title: "Manually drop chunks",
            href: "manually-drop-chunks",
            excerpt: "Manually drop chunks",
          },
          {
            title: "Troubleshooting data retention",
            href: "troubleshooting",
            type: "placeholder",
            excerpt: "Troubleshoot data retention",
          },
        ],
      },
      {
        title: "Tiered storage",
        href: "data-tiering",
        excerpt: "Save on storage costs by tiering older data to a low-cost bottomless object storage tier",
        children: [
          {
            title: "About the object storage tier",
            href: "about-data-tiering",
            excerpt:
              "Learn how the object storage tier helps you save on storage costs",
          },
          {
            title: "Creating tiering policies",
            href: "creating-data-tiering-policy",
            excerpt:
              "How to create a tiering policy",
          },
          {
            title: "Enabling the object storage tier",
            href: "enabling-data-tiering",
            excerpt:
              "How to enable the object storage tier",
          },
          {
            title: "Manually tier data",
            href: "manual-tier-chunk",
            excerpt:
              "How to manually tier data to the object storage tier",
          },
          {
            title: "Manually untier data",
            href: "untier-data",
            excerpt: "How to manualy untier data from the object storage tier",
          },
          {
            title: "Querying tiered data",
            href: "querying-tiered-data",
            excerpt:
              "How to query tiered data",
          },
          {
            title: "Replicas and forks with tiered data",
            href: "tiered-data-replicas-forks",
            excerpt:
              "How tiered data works on replicas and forks",
          },
          {
            title: "Tour of tiered storage",
            href: "tour-data-tiering",
            excerpt:
              "A quick tour of tiered storage",
          },
          {
            title: "Troubleshooting",
            href: "troubleshooting",
            type: "placeholder",
          },
        ],
      },
    ],
  },
];

