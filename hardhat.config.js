require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const privateKey = process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    iscp: {
      url: "https://evm.wasp.sc.iota.org",
      chainId: 1074,
      accounts: privateKey,
      timeout: 60000
    },
    hardhat: {
      chainId: 1337
    },
    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
    */
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

