require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
            version: "0.8.18",
            settings: {
                optimizer: {
                enabled: true,
                runs: 10,
                },
            },
            },
          {
            version: "0.8.9",
          },
          {
            version: "0.7.0",
          },
        ],
      },
  networks: {
    
    hardhat: {
        chainId: 137,
        gasPrice: 420000000000,
        forking: {
            url: "https://polygon-rpc.com",
            enabled: true,
            blockNumber: 41576429
        },
    },
    hedera: {
        url: "https://previewnet.hashio.io/api",
        accounts: [process.env.DEPLOYER_PRIVATE_KEY]
    },
    sepolia: {
        url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
        accounts: [process.env.DEPLOYER_PRIVATE_KEY],
        //gasPrice: 1000000000
    },
    },
etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
},
};
