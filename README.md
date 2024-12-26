# Mandala Chain Documentation

Welcome to the official documentation repository for Mandala Chain. This comprehensive documentation serves as the primary resource for developers, validators, and users looking to interact with the Mandala Chain ecosystem.

## Overview

Mandala Chain is a next-generation blockchain platform that combines high performance, security, and interoperability. Our documentation covers everything from basic concepts to advanced development guides.

## Documentation Structure

- **Getting Started**: Quick introduction and setup guides
- **Learn**: Core concepts, architecture, and technical specifications
- **Build**: Development guides, smart contract tutorials, and API references
- **Use**: Practical guides for end-users and wallet integration
- **Run a Node**: Instructions for running full nodes and becoming a validator
- **Niskala Testnet**: Information about our testnet environment

## Local Development Setup

This documentation website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. To run it locally:

1. **Installation**
   ```bash
   pnpm i
   ```

2. **Start Development Server**
   ```bash
   pnpm start
   ```
   This starts a local server and opens a browser window. Changes are reflected live.

3. **Build for Production**
   ```bash
   pnpm build
   ```
   Generates static content in the `build` directory.

## Contributing

We welcome contributions from the community! Whether it's:
- Fixing typos or improving clarity
- Adding new documentation sections
- Updating outdated information
- Translating content

Please feel free to submit pull requests or open issues for any improvements.

## Deployment

For maintainers, deploy using either:

```bash
# Using SSH
USE_SSH=true pnpm deploy

# Using HTTPS
GIT_USER=<Your GitHub username> pnpm deploy
```

## Support

If you need help or have questions:
- Open an issue in this repository
- Join our [Discord](https://discord.gg/mandalachain) community
- Follow us on [Twitter](https://twitter.com/mandalachain)

## License

This documentation is licensed under the MIT License. See the LICENSE file for details.
