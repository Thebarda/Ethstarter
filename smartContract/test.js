var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
var ethstarterSmartContract = require('./ethstarterContract');

var accounts = web3.eth.accounts;
ethstarterSmartContract.minerContrat();
console.log(web3.isAddress(accounts[0]));
console.log(ethstarterSmartContract.getNbCrowfundings());

describe('')