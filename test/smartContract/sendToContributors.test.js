let Web3 = require("web3");
let ethstarterSmartContract = require('../../smartContract/ethstarterContract');
let assert = require("assert");
let web3 = null;
let accounts = null;
describe("send to contributors", () => {
    before(() => {
        web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:42669"));
        accounts = web3.eth.accounts;
        ethstarterSmartContract.minerContrat();
    });


    it("should throws an error when idCrowdfund is null", () => {
        assert.throws(
            () => {ethstarterSmartContract.sendToContributors(null)},
            "L'id de la campagne est null ou undefined"
        );
    }).timeout(10000);
    it("should throws an error when idCrowdfund is undefined", () => {
        assert.throws(
            () => {ethstarterSmartContract.sendToContributors(undefined)},
            "L'id de la campagne est null ou undefined"
        );
    }).timeout(10000);
    it("both account their ether get back", () => {
        ethstarterSmartContract.addCrowfunding(100, accounts[0], 10, 12);
        ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], 5);
        ethstarterSmartContract.addContributorToCrowfund(100, accounts[2], 5);
        let previousBalanceAccount1 = web3.eth.getBalance(accounts[1]);
        let previousBalanceAccount2 = web3.eth.getBalance(accounts[2]);
        ethstarterSmartContract.sendToContributors(100);
        assert.equal((web3.eth.getBalance(accounts[1]) - previousBalanceAccount1) > 4, true);
        assert.equal((web3.eth.getBalance(accounts[2]) - previousBalanceAccount2) > 4, true);
    }).timeout(10000);
});
