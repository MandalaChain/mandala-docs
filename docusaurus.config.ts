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
            position: "left",
            label: "Docs",
            to: "https://docs.mandalachain.io",
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
        copyright: `Copyright © ${new Date().getFullYear()} Mandala Developers Hub.`,
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
        label: "About Mandala",
        id: "about",
        iconCssVarName: "mandala-icon",
        content: [
          {
            title: "About Mandala Chain",
            caption: "Japan's Scalable, Interoperable Smart Contract Platform",
            url: "https://docs.mandalachain.io/docs/learn/mandala",
          },
          {
            title: "Architecture",
            caption: "Ecosystem Architecture: Ethereum zkEVM Layer 2 & Polkadot Parachain",
            url: "https://docs.mandalachain.io/docs/learn/architecture/",
          },
          {
            title: "Networks",
            caption: "Networks accessible within the Mandala Ecosystem",
            url: "https://docs.mandalachain.io/docs/learn/networks",
          },
          {
            title: "Mandala Token",
            caption: "ASTR token: utilities, allocation, and values",
            url: "https://docs.mandalachain.io/docs/learn/mandala-tokens",
          },
          {
            title: "Tokenomics 2.0",
            caption: "Mandala Tokenomics: Inflation and Fees Model",
            url: "https://docs.mandalachain.io/docs/learn/tokenomics2/",
          },
          {
            title: "Mandala zkEVM",
            caption: "Layer 2 scaling solution connected to AggLayer",
            url: "https://docs.mandalachain.io/docs/learn/zkEVM/",
          },
        ],
        highlight: {
          single: {
            title: "Connecting you to web3",
            caption: "Creating opportunities for individuals to use web3 technology",
            buttonText: "Mandala website",
            buttonUrl: "https://mandalachain.io",
          },
        },
      },
      {
        label: "dApp Staking",
        id: "staking",
        iconCssVarName: "staking-icon",
        content: [
          {
            title: "What is dApp Staking",
            caption: "Unique stacking mechanism to provide financial incentives for developers",
            url: "https://docs.mandalachain.io/docs/learn/dapp-staking/",
          },
          {
            title: "Technical Overview",
            caption: "Technical and detailed presentation of dApp Staking",
            url: "https://docs.mandalachain.io/docs/learn/dapp-staking/dapp-staking-protocol",
          },
          {
            title: "Parameters",
            caption:
              "Parameters such as time, rewards, slot allocations, tier assignments, and thresholds.",
            url: "https://docs.mandalachain.io/docs/learn/dapp-staking/protocol-parameters",
          },
          {
            title: "For Users",
            caption: "How ASTR holders can take part in dApp Staking",
            url: "https://docs.mandalachain.io/docs/use/dapp-staking/for-stakers/",
          },
          {
            title: "For Developers",
            caption: "How project owners can participate in dApp Staking",
            url: "https://docs.mandalachain.io/docs/use/dapp-staking/for-devs/",
          },
          {
            title: "Building with dApp Staking",
            caption: "Leveraging and building on top of dApp Staking",
            url: "https://docs.mandalachain.io/docs/build/dapp-staking/",
          },
        ],
        highlight: {
          single: {
            title: "dApp Staking",
            caption: "Incentivized program connecting devs to Mandala community",
            buttonText: "Build & Earn",
            buttonUrl: "https://docs.mandalachain.io/docs/learn/dapp-staking/",
          },
        },
      },
      {
        label: "Users Guides",
        id: "guides",
        iconCssVarName: "guide-icon",
        content: [
          {
            title: "Mandala Wallet",
            caption: "Set up your Ethereum or Polkadot wallet for the Mandala Ecosystem",
            url: "https://docs.mandalachain.io/docs/use/manage-wallets/create-wallet",
          },
          {
            title: "Transfer assets",
            caption: "Transfer assets within and outside the Mandala Ecosystem",
            url: "https://docs.mandalachain.io/docs/use/manage-assets/transfer-tokens",
          },
          {
            title: "Mandala zkEVM",
            caption: "Explore and utilize the Layer 2 Mandala zkEVM",
            url: "https://docs.mandalachain.io/docs/use/zkevm-guides/",
          },
          {
            title: "dApp Staking",
            caption: "How ASTR holders or project owners can take part in dApp Staking",
            url: "https://docs.mandalachain.io/docs/use/dapp-staking/",
          },
          {
            title: "Troubleshooting",
            caption: "For users encountering issues on the Mandala Chain",
            url: "https://docs.mandalachain.io/docs/use/troubleshooting",
          },
        ],
        highlight: {
          single: {
            title: "Mandala Portal",
            caption: "Multi-chain platform hub for asset management",
            buttonText: "Try it out!",
            buttonUrl: "https://portal.mandalachain.io/",
          },
        },
      },
      {
        label: "Builders",
        id: "builders",
        iconCssVarName: "builders-icon",
        content: [
          {
            title: "Introduction",
            caption: "A Developer's Overview of the Mandala Ecosystem",
            url: "https://docs.mandalachain.io/docs/build/Introduction/",
          },
          {
            title: "Nodes",
            caption: "Set up a permissionless node and become a collator",
            url: "https://docs.mandalachain.io/docs/build/nodes/",
          },
          {
            title: "Build Environment",
            caption: "Set up a local environment tailored to your development requirements",
            url: "https://docs.mandalachain.io/docs/build/environment/",
          },
          {
            title: "Mandala zkEVM",
            caption: "Everything you need to build on Mandala zkEVM Layer 2",
            url: "https://docs.mandalachain.io/docs/build/zkEVM/",
          },
          {
            title: "Integrations",
            caption: "Common services and infrastructure tools integrated on Mandala Chain",
            url: "https://docs.mandalachain.io/docs/build/integrations/",
          },
          {
            title: "WASM smart-contracts",
            caption: "Build and deploy a smart contract using the WASM tech stack",
            url: "https://docs.mandalachain.io/docs/build/wasm/",
          },
          {
            title: "EVM smart-contracts",
            caption: "Build and deploy a smart contract using the EVM tech stack",
            url: "https://docs.mandalachain.io/docs/build/EVM/",
          },
        ],
        highlight: {
          multi: [
            {
              title: "Faucet",
              subtitle: "Need tokens for testing?",
              icon: null,
              url: "https://docs.mandalachain.io/docs/build/environment/faucet",
            },
            {
              title: "Support",
              subtitle: "Encountering issues?",
              icon: "/img/socials/discord-color.svg",
              url: "https://discord.gg/mandalanetwork",
            },
            {
              title: "Check our Ecosystem",
              subtitle: "Developer toolings",
              icon: null,
              url: "https://mandalachain.io/ecosystem",
            },
          ],
        },
      },
    ],
  },
};

module.exports = config;
