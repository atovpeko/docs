module.exports = [
  {
    title: "Tutorials",
    href: "tutorials",
    excerpt: "Learn about common scenarios and use cases for Timescale",
    children: [
      {
        title: "Cryptocurrency - part 1",
        href: "blockchain-query",
        excerpt: "Query the Bitcoin blockchain",
        children: [
          {
            title: "Set up",
            href: "blockchain-dataset",
            excerpt:
              "Set up a dataset so you can query the Bitcoin blockchain",
          },
          {
            title: "Query data",
            href: "beginner-blockchain-query",
            excerpt: "Query the Bitcoin blockchain dataset",
          },
          {
            title: "Bonus: set up compression",
            href: "blockchain-compress",
            excerpt:
              "Compress the dataset so you can store the Bitcoin blockchain more efficiently",
          },
        ],
      },
      {
        title: "Cryptocurrency - part 2",
        href: "blockchain-analyze",
        excerpt: "Analyze the Bitcoin blockchain with Timescale hyperfunctions",
        children: [
          {
            title: "Set up",
            href: "blockchain-dataset",
            excerpt:
              "Set up a dataset so you can analyze the Bitcoin blockchain",
          },
          {
            title: "Query data",
            href: "analyze-blockchain-query",
            excerpt: "Analyze the Bitcoin blockchain dataset with Timescale hyperfunctions",
          },
        ],
      },
      {
        title: "Energy - part 1",
        href: "energy-data",
        excerpt: "Learn how to analyze energy consumption data",
        children: [
          {
            title: "Set up",
            href: "dataset-energy",
            excerpt: "Set up a dataset so you can analyze energy consumption data",
          },
          {
            title: "Query data",
            href: "query-energy",
            excerpt: "Queries energy consumption data",
          },
          {
            title: "Bonus: set up compression",
            href: "compress-energy",
            excerpt:
              "Compress the dataset so you can store the data more efficiently",
          },
        ]
      },
      {
        title: "Finance - part 1",
        href: "financial-tick-data",
        excerpt: "Use Timescale to store financial tick data",
        children: [
          {
            title: "Set up",
            href: "financial-tick-dataset",
            excerpt: "Set up a dataset so you can query financial tick data",
          },
          {
            title: "Query data",
            href: "financial-tick-query",
            excerpt: "Query and visualize financial tick data",
          },
          {
            title: "Bonus: set up compression",
            href: "financial-tick-compress",
            excerpt:
              "Compress the dataset so you can store the data more efficiently",
          },
        ],
      },
      {
        title: "Finance - part 2",
        href: "financial-ingest-real-time",
        excerpt: "Ingest real-time financial data with websocket",
        children: [
          {
            title: "Set up",
            href: "financial-ingest-dataset",
            excerpt: "Set up a dataset so you can query the real-time data",
          },
          {
            title: "Query data",
            href: "financial-ingest-query",
            excerpt: "Query and visualize real-time data",
          },
        ],
      },
      {
        title: "Transport - part 1",
        href: "nyc-taxi-cab",
        excerpt: "An introduction to time-series using NYC taxi data",
        children: [
          {
            title: "Set up",
            href: "dataset-nyc",
            excerpt: "Set up a dataset so you can query NYC data",
          },
          {
            title: "Query data",
            href: "query-nyc",
            excerpt: "Query NYC data",
          },
          {
            title: "Bonus: set up compression",
            href: "compress-nyc",
            excerpt:
              "Compress the dataset so you can store the data more efficiently",
          },
        ],
      },
      {
        title: "Transport - part 2",
        href: "nyc-taxi-geospatial",
        excerpt: "Learn how to plot geospatial time-series data with NYC taxi cabs",
        children: [
          {
            title: "Set up",
            href: "dataset-nyc",
            excerpt: "Set up a dataset so you can plot geospatial NYC taxi data",
          },
          {
            title: "Query data",
            href: "plot-nyc",
            excerpt: "Plot geospatial NYC taxi data",
          },
        ],
      },
      {
        title: "Internet of things",
        href: "simulate-iot-sensor-data",
        excerpt: "Simulate and query an IoT sensor dataset",
      },
      {
        title: "Timescale community cookbook",
        href: "cookbook",
        excerpt: "Code examples from the community that help you with loads of common conundrums.",
      },
    ],
  },
];
