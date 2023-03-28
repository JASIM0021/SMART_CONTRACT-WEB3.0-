// https://eth-sepolia.g.alchemy.com/v2/7C0Vf7vTeWtzTD3k-4haOXW3IvUhz8fT


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/7C0Vf7vTeWtzTD3k-4haOXW3IvUhz8fT',
      accounts: ['ca4d4e19472e4b3bd45a4176b70e6ecb532ed0433b9f21739c10739b4d3c822e'],
    },
  },
};