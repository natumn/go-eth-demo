
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProviders("http://localhost:8545", 0, BasicAuthUsername, BasicAuthPassword));

var contract = web3.eth.contract(abi).at(adress);

contract.eth.sendTransaction(id, data, callback);