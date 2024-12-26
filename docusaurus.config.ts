// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Welcome to Mandala Chain",
  tagline: "Connecting Government, Enterprise & Retail to Onboard the Next 100M Users.",
  url: "https://docs.mandalachain.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/fav.png",
  organizationName: "MandalaChain", // Usually your GitHub org/user name.
  projectName: "mandala-docs", // Usually your repo name.
  plugins: [],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
      type: "text/css",
    },
  ],
  // clientModules: [require.resolve("./static/mandalaAi.js")],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/MandalaChain/mandala-docs/tree/main/",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/MandalaChain/mandala-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  //Enable multilanguage support. Portuguese added as first language
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: { htmlLang: "en-US" },
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Mandala",
          src: "img/mandala-logo-text.svg",
          srcDark: "img/mandala-logo-text-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started",
            position: "left",
            label: "Docs",
          },
          {
            position: "left",
            label: "Website",
            to: "https://mandalachain.io",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Developer",
            items: [
              {
                label: "Start Building",
                href: "https://mandalachain.io",
              },
              {
                label: "GitHub",
                href: "https://github.com/MandalaChain",
              },
            ],
          },
          {
            title: "Explore",
            items: [
              {
                label: "Community",
                href: "https://mandalachain.io",
              },
              {
                label: "Discord Community",
                href: "https://mandalachain.io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mandala Chain.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust", "toml", "solidity"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "S7S4T6Q4KC",

        // Public API key: it is safe to commit it
        apiKey: "daf10229cac599f39cd3de3e87f85e6d",

        indexName: "mandala",

        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "mandalachain\\.io",

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
  customFields: {
    searchTags: ["dApp Staking", "smart contracts", "IDE", "zkEVM", "API", "Faucet", "Oracles"],
    tabs: [
      {
        label: "About",
        id: "about", 
        iconCssVarName: "mandala-icon",
        content: [
          {
            title: "Getting Started",
            caption: "Introduction to Mandala Chain",
            url: "/docs/getting-started",
          },
          {
            title: "Architecture and Components",
            caption: "Understanding Mandala Chain's core architecture",
            url: "/docs/learn/architecture-and-components",
          },
          {
            title: "Network Communication",
            caption: "How Mandala Chain handles network communication",
            url: "/docs/learn/network-communication",
          },
          {
            title: "XCM and Interoperability",
            caption: "Cross-chain messaging and interoperability features",
            url: "/docs/learn/xcm-and-interoperability",
          },
          {
            title: "Network Token",
            caption: "Understanding Mandala Chain's token economics",
            url: "/docs/learn/network-token",
          },
          {
            title: "Smart Contracts",
            caption: "Overview of smart contract capabilities",
            url: "/docs/learn/smart-contracts",
          }
        ],
        highlight: {
          single: {
            title: "Learn About Mandala",
            caption: "Discover the fundamentals of Mandala Chain",
            buttonText: "Start Learning",
            buttonUrl: "/docs/learn",
          },
        },
      },
      {
        label: "Guides",
        id: "guides",
        iconCssVarName: "guide-icon",
        content: [
          {
            title: "Wallets",
            caption: "Set up and manage your Mandala Chain wallet",
            url: "/docs/use/wallets",
          },
          {
            title: "Account",
            caption: "Learn about Mandala Chain accounts", 
            url: "/docs/use/account",
          },
          {
            title: "WASM Smart Contracts",
            caption: "Build and deploy WASM smart contracts",
            url: "/docs/build/wasm-smart-contracts",
          },
          {
            title: "Run a Node",
            caption: "Set up and run different types of nodes",
            url: "/docs/build/run-a-node",
          },
          {
            title: "Build Environment",
            caption: "Set up your development environment",
            url: "/docs/build/build-environment",
          }
        ],
        highlight: {
          multi: [
            {
              title: "Faucets",
              subtitle: "Need tokens for testing?",
              icon: null,
              url: "/docs/build/build-environment/test-tokens-faucets",
            },
            {
              title: "Support",
              subtitle: "Need help building?",
              icon: "/img/socials/discord-color.svg",
              url: "https://discord.gg/mandalanetwork",
            }
          ],
        },
      },
    ],
  },
};

module.exports = config;
