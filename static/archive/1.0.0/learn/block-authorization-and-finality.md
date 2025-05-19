# Block Authorization and Finality

## Block Authors

On Mandala Chain, collators maintain full nodes for both the Relay Chain and the parachain. They aggregate transactions into candidate blocks and produce Proofs-of-Validity (PoVs) for assigned validators to check. These collators—referred to as **block authors**—submit their candidates to the Candidate Backing subsystem, where Mandala Chain validators issue “Seconded” or “Valid” statements. Once a candidate gathers a quorum of attestations, it becomes _backable_.

The Relay Chain block author (in this case, Polkadot Relay), then includes at most one backable candidate receipt for Mandala Chain per Relay Chain block; inclusion marks it as _backed_ in that fork. Mandala Chain block authors only include candidate receipts whose parent receipt appears in an earlier block, ensuring a valid chain. Additionally, they include only those receipts for which they hold an erasure-coding chunk of the PoV data, guaranteeing availability for subsequent validity and availability checks.

## Block Production

In the Mandala Chain, block production is a critical process managed by **collators**. These key participants are responsible for assembling transactions and proposing new block candidates, ensuring the smooth operation of the blockchain network.

**Key Aspects of Block Production**

1. **Independent Operation**:
   - Block production functions separately from the finality mechanism. This separation allows for efficient and rapid generation of blocks without delays, contributing to the overall performance of the parachain.
2. **Consensus Mechanism**:
   - The Mandala Chain uses the **Aura (Authority Round)** pallet for producing blocks, based on the **Proof-of-Authority (PoA)** model. This model simplifies block production by using a fixed set of trusted collators to author blocks, ensuring security and efficiency.
3. **Deterministic Control**:
   - Aura's design enables a centralized (but trusted) group of collators to create blocks in a scheduled manner. This deterministic approach minimizes conflicts and helps predict network behavior, enhancing reliability.

**Verification of Aura Implementation**

To maintain the integrity and functionality of Aura in Mandala Chain, we follow a systematic verification process:

- **Aura Pallet Verification**: It's essential to ensure that the Aura pallet is present within the chain's runtime. This verification confirms that the pallet is properly integrated and actively managing block production.
- **Aura Keys Check**: The accuracy of Aura keys setup is crucial. We ensure that these keys are correctly configured within the Aura pallet, allowing authorized collators to carry out block production effectively.
- **ASTAR Reference**: We benchmark our process against ASTAR, which also utilizes Aura. Their successful methodology in maintaining Aura's integrity helps validate our approach and provides insights into optimizing our setup.

<figure><img src="/img/assets/image (6).png" alt=""></img><figcaption><p><em>When opening our Mandala Node in production, everything is running Aura as expected.</em></p></figcaption></figure>

## Block Finality

Block finality is a crucial aspect of the Mandala Chain, ensuring that once a block is validated, it becomes immutable and secure. This integrity is crucial for maintaining trust across the network.

**How Block Finality Works**

1. **Finality Mechanism**:
   - After collators create block candidates, these blocks are not immediately considered finalized. Instead, validators from the relay chain use the **GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement)** protocol to finalize them.
2. **Role of GRANDPA**:
   - GRANDPA is a finality protocol used across Polkadot parachains, providing a robust and reliable way to confirm block permanence. It ensures that even if forks occur, only the canonical chain is recognized and extends, eliminating conflicts and duplications.
3. **Nominated Proof-of-Stake (NPoS) System**:
   - Validators are selected via the NPoS system. In this system, nominators stake DOT tokens to endorse validators they trust.
   - Trusted validators are then responsible for executing the GRANDPA protocol, confirming the security and finality of blocks. This consensus process helps maintain the network's overall integrity.
4. **Fork Resolution**:
   - Forks can happen when multiple blocks reference the same parent block. The **fork-choice rule** is applied to decide which chain is legit.
   - In the case of GRANDPA, the longest chain rule is implemented, where the "best" chain is determined by its length. Validators vote to finalize this chain, making it the official record.
5. **Benefits of GRANDPA**:
   - It provides immediate finality once enough votes are collected. This means users can trust that the data on the blockchain won't be altered, enhancing security and trustworthiness.
   - It efficiently resolves forks, ensuring that only one valid chain continues, simplifying the processing and validation tasks across the network.

Through these mechanisms, block finality in the Mandala Chain is robustly managed, ensuring that transactions are secure, irreversible, and reliably recorded in the network’s ledger. This setup not only enhances trust but also optimizes the performance and scalability of the entire system.
