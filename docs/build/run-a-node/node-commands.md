---
hidden: true
---

# Node Commands

The following sections summarize the commands of Mandala Chain nodes you need for different cases. For any more details, you can consult the help page:

```
madya-solo --help
```

## Collator[​](https://docs.mandalachain.io/docs/build/nodes/node-commands#collator) <a href="#collator" id="collator"></a>

### Binary service file <a href="#binary-service-file" id="binary-service-file"></a>

```
[Unit]
Description=Madya Solo

[Service]
User=madya
Group=madya

ExecStart=/usr/local/bin/madya-solo \
  --pruning archive \
  --validator \
  --name {VALIDATOR_NAME} \
  --chain madya \
  --base-path /var/lib/madya \
  --trie-cache-size 0 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```
[Unit]
Description=Vraja Solo

[Service]
User=madya
Group=madya

ExecStart=/usr/local/bin/madya-solo \
  --pruning archive \
  --validator \
  --name {VALIDATOR_NAME} \
  --chain solo\
  --base-path /var/lib/niskala\
  --trie-cache-size 0 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

### Docker <a href="#docker" id="docker"></a>

```
docker run -d \
--name madya-container \
-u $(id -u madya):$(id -g madya) \
-p 30333:30333 \
-v "/var/lib/madya/:/data" \
mandalachain/madya-solo:latest \
madya-solo \
--pruning archive \
--validator \
--name {VALIDATOR_NAME} \
--chain madya \
--base-path /data \
--trie-cache-size 0 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
```

```
docker run -d \
--name vraja-container \
-u $(id -u madya):$(id -g madya) \
-p 30333:30333 \
-v "/var/lib/madya/:/data" \
mandalachain/madya-solo:latest \
madya-solo \
--pruning archive \
--validator \
--name {VALIDATOR_NAME} \
--chain niskala \
--base-path /data \
--trie-cache-size 0 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
```

## Archive node as RPC endpoint <a href="#archive-node-as-rpc-endpoint" id="archive-node-as-rpc-endpoint"></a>

### Binary <a href="#binary" id="binary"></a>

```
[Unit]
Description=Madya Solo node

[Service]
User=madya
Group=madya

ExecStart=/usr/local/bin/madya-solo \
  --pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain madya \
  --base-path /var/lib/madya \
  --rpc-external \
  --rpc-methods Safe \
  --rpc-max-request-size 1 \
  --rpc-max-response-size 1 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```
[Unit]
Description=Niskala Archive node

[Service]
User=madya
Group=madya

ExecStart=/usr/local/bin/madya-solo \
  --pruning archive \
  --rpc-cors all \
  --name {NODE_NAME} \
  --chain niskala \
  --base-path /var/lib/niskala \
  --rpc-external \
  --rpc-methods Safe \
  --rpc-max-request-size 1 \
  --rpc-max-response-size 1 \
  --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \

Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

### Docker <a href="#docker" id="docker"></a>

```
docker run -d \
--name madya-container \
-u $(id -u madya):$(id -g madya) \
-p 30333:30333 \
-p 9944:9944 \
-v "/var/lib/madya/:/data" \
mandalachain/madya-collator:latest \
madya-collator \
--pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain madya \
--base-path /data \
--rpc-external \
--rpc-methods Safe \
--rpc-max-request-size 1 \
--rpc-max-response-size 1 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
```

```
docker run -d \
--name vraja-container \
-u $(id -u madya):$(id -g madya) \
-p 30333:30333 \
-p 9944:9944 \
-v "/var/lib/madya/:/data" \
mandalachain/madya-collator:latest \
madya-collator \
--pruning archive \
--rpc-cors all \
--name {NODE_NAME} \
--chain niskala \
--base-path /data \
--rpc-external \
--rpc-methods Safe \
--rpc-max-request-size 1 \
--rpc-max-response-size 1 \
--telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \
```

### Specific cases command args[​](https://docs.mandalachain.io/docs/build/nodes/node-commands#specific-cases-command-args) <a href="#specific-cases-command-args" id="specific-cases-command-args"></a>

#### External monitoring[​](https://docs.mandalachain.io/docs/build/nodes/node-commands#external-monitoring) <a href="#external-monitoring" id="external-monitoring"></a>

```
--prometheus-external
```

---

### Full command documentation[​](https://docs.mandalachain.io/docs/build/nodes/node-commands#full-command-documentation) <a href="#full-command-documentation" id="full-command-documentation"></a>

To see full node command binary embedded documentation, please use the help option.

```
$ ./madya-solo -h
```

\
