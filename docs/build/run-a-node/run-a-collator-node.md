# Run a Collator Node

This guide provides a detailed explanation of collator nodes within the Mandala Network and step-by-step instructions for setting up and running a collator node.

## Overview

### What is a Collator Node?

Collator node serves a critical role in the Mandala Network, where it produces blocks on parachain. Collator node collects user transactions and aggregates them into block candidates. These blocks are then provided to the Relay Chain validators along with **Proofs of Validity (PoV)**, ensuring that the proposed blocks meet the network's rules and standards. Validators then will
be responsible for the finalization.

Collators maintain the parachain's state and ensure smooth communication between the parachain and the Relay Chain.

:::info
Collators do not provide security guarantees for parachains. Instead, they rely on the Relay Chain's security model to finalize blocks. For more info [learn here](https://wiki.polkadot.network/docs/learn-collator)
:::

---

### Role of Collator Node

Collator nodes serve several essential functions in the Mandala Network:

- **Block Production**: Aggregate transactions into valid block candidates and propose them to Relay Chain validators.
- **State Maintenance**: Maintain the full state of the parachain to ensure validators can verify blocks efficiently.
- **Network Bridging**: Act as intermediaries between parachains and the Relay Chain, facilitating cross-chain communication.
- **Consensus Participation**: Operate within the Aura consensus mechanism to produce blocks deterministically while leaving finality to validators using GRANDPA.

In Mandala’s non-permissionless setup, only pre-approved collators are allowed, ensuring network security and reliability.

---

## Getting Started

### Project Setup

1. Clone the [Mandala-Node](https://github.com/MandalaChain/Mandala-Node) repository.

```git
git clone https://github.com/MandalaChain/Mandala-Node.git
```

2. Navigate to the directory

```bash
cd Mandala-Node
```

### Requirement

To run Mandala-Node, you will need to have Rust installed in your machine. Depending on your operating system and Rust version, there might be additional packages required to compile the node.

If you haven't had rust on your machine or encounter version error, run following scripts:

```bash
.maintain/scripts/install-rust-toolchain.sh
```

Successful stup will produce following output:

```bash
installed toolchains
--------------------

stable-aarch64-apple-darwin (default)
nightly-aarch64-apple-darwin
1.75.0-aarch64-apple-darwin
solana

installed targets for active toolchain
--------------------------------------

aarch64-apple-darwin
wasm32-unknown-unknown

active toolchain
----------------

stable-aarch64-apple-darwin (default)
rustc 1.83.0 (90b35a623 2024-11-26)

Default host: aarch64-apple-darwin
rustup home:  /Users/[USERNAME]/.rustup

installed toolchains
--------------------

stable-aarch64-apple-darwin (default)
nightly-aarch64-apple-darwin
1.75.0-aarch64-apple-darwin

installed targets for active toolchain
--------------------------------------

aarch64-apple-darwin
wasm32-unknown-unknown

active toolchain
----------------

nightly-aarch64-apple-darwin (overridden by +toolchain on the command line)
rustc 1.86.0-nightly (b3b368a18 2025-01-05)

Rust toolchain installation and configuration completed successfully!
```

### Running a node

1. Download Zombienet
   Zombienet is used to run Mandala Node on development chain since it requires a relay chain to connect to. Later we will spin up a 2-node rococo local testnet instance using zombienet.

   ```bash
    .maintain/scripts/download-zombienet.sh
   ```

   If successful, you will find _zombienet_ binaries on these location `.maintain/zombienet/binaries`

2. Compile Mandala Polkadot

   ```bash
    .maintain/scripts/compile-mandala-polkadot.sh
   ```

   :::info
   Compiling the Mandala Polkadot takes a significant amount of resource and time. On Macbook Air Apple M1 (2020) it took approximately 2 hours for the compilation to finish. Please wait patiently and let the code cook.
   :::

   If successful, you will find _mandala_ binaries on these location `.maintain/zombienet/binaries`

3. Start the network
   Run following commands:

   ```bash
   .maintain/scripts/start-zombienet.sh <chain-type>
   ```

   There are 4 chain types available to run

   - `local`: Local development chain (Mandala)
   - `mainnet`: Production chain (Mandala)
   - `dev`: Development chain (Niskala)
   - `live`: Live network (Niskala)

   Successful run will produce following result:
    <Figure src={require('/img/assets/build/run-a-node/run-a-node-collator-1.png').default} width="300" />

4. Connect to Polkadot.JS Front-End
   You can view the network detailed information by connecting it to the Polkadot.JS Front-End. Follow the link given that showed up when running the network.

   <Figure src={require('/img/assets/build/run-a-node/run-a-node-collator-2.png').default} width="300" />
   :::tip
       - Interacting with the blockchain requires Polkadot.JS account. If you didn't have one yet, follow this [article](/docs/build/use/wallets.md#polkadot-js-app)
       - It's recommended to use Google Chrome for accessing the Polkadot.JS app
   :::

Congratulation! You've successfully run Mandala collator node. If you find any difficulties during the process, feel free to contact our support team in [Discord](https://discord.com/invite/MwUQgQZgxm) or [Telegram](https://t.me/mandalachain)
