# Smart Contracts

## Overview

Mandala Chain is a Substrate-based blockchain platform. Developers can create and deploy smart contracts on Mandala Chain using two types of technologies: WebAssembly (Wasm) and Ethereum Virtual Machine (EVM). This dual compatibility allows developers to build decentralized applications (DApps) using their preferred tools and languages. Mandala Chain commited to ensure smooth transitions for developers that comes from other blockchain environments.

## Types of Smart Contracts on Mandala Chain

### WebAssembly (Wasm) Smart Contracts

Wasm smart contracts on Mandala Chain leverage the `pallet-contracts` API, a sandboxed environment for deploying and executing contracts. These contracts are written in languages that compile to Wasm, such as **ink!** (Rust-based) or **ask!** (AssemblyScript-based).

#### Key Features:

- **Compatibility with `pallet-contracts` API**: Ensures seamless integration with the runtime environment.
- **Sandboxed Execution**: Uses the Wasm interpreter `wasmi` for secure and correct execution of untrusted smart contract code.
- **Two-Step Deployment Process**:
  1. **Upload Contract Code**: The Wasm code is uploaded to the chain with a unique identifier (`code_hash`).
  2. **Instantiate Contract**: Create an address and storage for the contract based on the uploaded code.

This decoupled approach reduces on-chain storage requirements and allows multiple instances of a single contract code, saving costs for developers. For example, standardized token contracts like PSP22 or PSP34 can be reused without re-uploading the code.

To learn more about building Wasm smart contracts, refer to the [Wasm Smart Contracts section](https://docs.mandalachain.io/mandalachain/build/wasm-smart-contracts).

---

### EVM Smart Contracts

Mandala Chain leverage EVM-frontier to support EVM smart contracts, enabling developers to use Solidity or any other language that compiles to EVM-compatible bytecode. This feature provides a familiar environment for Ethereum developers while leveraging Mandala Chain's robust infrastructure.

#### Key Features:

- **Solidity Compatibility**: Write contracts in Solidity or other supported languages.
- **EVM Bytecode Support**: Deploy contracts compiled into EVM-compatible bytecode.
- **Low Friction Development**: Develop, test, and execute smart contracts that is compatible with the existing Ethereum developer toolchain.

To learn more about building EVM smart contracts on Mandala Chain, refer to the [EVM Smart Contracts section](https://docs.mandalachain.io/mandalachain/build/evm-smart-contracts) (upcoming)

---

## Why Choose Mandala Chain?

Mandala Chain bridges the gap between Web2 development and blockchain technology by offering:

- Flexibility in choosing between Wasm and EVM environments.
- Developer-friendly tools and documentation tailored for both ecosystems.
- A scalable and secure platform built on Substrate's proven architecture.

Start your journey into blockchain development with Mandala Chain today!
