
var Web3 = require("web3");

module.exports.calculJourRestant = function (dateLimite) {
    var dayResteTmp = new Date(dateLimite).getTime() - new Date().getTime();
    return (dayResteTmp / (1000 * 60 * 60 * 24)).toFixed(0);
};

module.exports.isAddress = function (addr) {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    return web3.isAddress(addr);
};


module.exports.genUUID = () => {
    var x = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return x() + x() + '-' + x() + '-' + x() + '-' + x() + '-' + x() + x() + x();
};