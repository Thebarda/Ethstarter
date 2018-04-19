let Web3 = require("web3");
let web3 = null;
let accounts = null;
web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:42669"));
accounts = web3.eth.accounts;

web3.eth.sendTransaction({
    from: accounts[4],
    to: accounts[2],
    value: web3.toWei(30, "ether")
});