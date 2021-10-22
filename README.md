## IOTA EVM NFT Marketplace

> Full stack NFT marketplace built with IOTA Smart Contracs, Solidity, IPFS, & Next.js

This is a fork of [dabit3/polygon-ethereum-nextjs-marketplace](https://github.com/dabit3/polygon-ethereum-nextjs-marketplace) and configurated for the IOTA Smart Contract Tesnet EVM. Special thanks to the author!

This is the codebase to go along with tbe blog post [Building a Full Stack NFT Marketplace on Ethereum with Polygon](https://dev.to/dabit3/building-scalable-full-stack-apps-on-ethereum-with-polygon-2cfb)

### Running this project

#### Gitpod

To deploy this project to Gitpod, follow these steps:

1. Click this link to deploy

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/huhn511/iota-evm-nft-marketplace
)


#### Local setup

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone https://github.com/huhn511/iota-evm-nft-marketplace

cd iota-evm-nft-marketplace

# install using NPM
npm install
```

2. Deploy

Create copy `.env.example`, rename it to `.env` and add a private key.

```sh
npx hardhat run scripts/deploy.js --network iscp
```

4. Start the app

```
npm run dev
```