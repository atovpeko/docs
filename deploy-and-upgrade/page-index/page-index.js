module.exports = [
  {
    title: "Deploy and upgrade",
    href: "deploy-and-upgrade",
    filePath: "index.md",
    excerpt:
      "Install and manage your deployment, control user access, and integrate third party tooling",
    children: [
      {
        title: "Deploy self-hosted TimescaleDB",
        href: "install",
        excerpt: "Deploy self-hosted TimescaleDB",
        children: [
          {
            title: "Docker",
            href: "installation-docker",
            iconSrc:
              "https://assets.iobeam.com/images/docs/moby.png",
            excerpt:
              "Install self-hosted TimescaleDB with a pre-built Docker container",
          },
          {
            title: "Kubernetes",
            href: "installation-kubernetes",
            iconSrc:
              "https://assets.iobeam.com/images/docs/kubernetes-icon-color.svg",
            excerpt: "Install self-hosted TimescaleDB on Kubernetes",
          },
          {
            title: "Linux",
            href: "installation-linux",
            iconSrc: "https://assets.iobeam.com/images/docs/linux-icon.svg",
            excerpt: "Install self-hosted TimescaleDB on Linux",
          },
          {
            title: "MacOS",
            href: "installation-macos",
            iconSrc:
              "https://assets.iobeam.com/images/docs/Apple_logo_black.svg",
            excerpt: "Install self-hosted TimescaleDB on MacOS using homebrew",
          },
          {
            title: "Source",
            href: "installation-source",
            iconSrc: "https://assets.iobeam.com/images/docs/source.png",
            excerpt:
              "Install self-hosted TimescaleDB on any operating system from source",
          },
          {
            title: "TimescaleDB Tune",
            href: "about-timescaledb-tune",
          },
          {
            title: "Windows",
            href: "installation-windows",
            iconSrc:
              "https://assets.iobeam.com/images/docs/Windows_logo_-_2012.svg",
            excerpt:
              "Install self-hosted TimescaleDB on Microsoft Windows using a zipped .exe file",
          },
          {
            title: "Timescale Toolkit",
            href: "install-toolkit",
            excerpt: "Install and update the Timescale Toolkit",
          },
        ],
      },
      {
        title: "Upgrade self-hosted TimescaleDB",
        href: "upgrades",
        children: [
          {
            title: "About upgrades",
            href: "about-upgrades",
            excerpt: "Learn about upgrading self-hosted TimescaleDB",
          },
          {
            title: "Minor upgrades",
            href: "minor-upgrade",
            excerpt:
              "Upgrade to a new minor version of self-hosted TimescaleDB",
          },
          {
            title: "Major upgrades",
            href: "major-upgrade",
            excerpt:
              "Upgrade to a new major version of self-hosted TimescaleDB",
          },
          {
            title: "Downgrade self-hosted TimescaleDB",
            href: "downgrade",
            excerpt: "Downgrade a self-hosted TimescaleDB version",
          },
          {
            title: "Upgrade within Docker",
            href: "upgrade-docker",
            excerpt:
              "Upgrade to a new minor version of self-hosted TimescaleDB within a Docker container",
          },
          {
            title: "Upgrade PostgreSQL",
            href: "upgrade-pg",
            excerpt: "Upgrade to a new version of PostgreSQL",
          },
        ],
      },
      {
        title: "Uninstall self-hosted TimescaleDB",
        href: "uninstall",
        excerpt: "Uninstalling self-hosted TimescaleDB",
        children: [
          {
            title: "Uninstall self-hosted TimescaleDB on macOS",
            href: "uninstall-timescaledb",
            excerpt: "Uninstall self-hosted TimescaleDB on macOS",
          },
        ],
      },
    ],
  },
];

