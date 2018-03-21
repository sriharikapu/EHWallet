
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://192.168.1.177:8545', tx_explorer: 'https://rinkeby.etherscan.io/tx/' },
  'Ropsten Testnet': { rpc: 'https://rinkeby.etherscan.io/tx/', tx_explorer: 'https://ropsten.etherscan.io/tx/' },
  'Main Net': { rpc: 'https://mainnet.infura.io/GjiCzFxpQAUkPtDUpKEP', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
