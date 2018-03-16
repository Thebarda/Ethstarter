let Web3 = require("web3");
let ethstarterSmartContract = require('../ethstarterContract');
let assert = require("assert");
let web3 = null;
let accounts = null;
describe("send to contributors", () => {
    before(() => {
        web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
        accounts = web3.eth.accounts;
        ethstarterSmartContract.minerContrat();
    });


    it("should throws an error when idCrowdfund is null", () => {
        assert.throws(
            () => {ethstarterSmartContract.sendToContractor(null)},
            "L'id de la campagne est null ou undefined"
        );
    });
    it("should throws an error when idCrowdfund is undefined", () => {
        assert.throws(
            () => {ethstarterSmartContract.sendToContractor(undefined)},
            "L'id de la campagne est null ou undefined"
        );
    });
    it("contractor should get 9.9999999 ether", () => {
        ethstarterSmartContract.addCrowfunding(100, accounts[0], 10, 12);
        ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], 5);
        ethstarterSmartContract.addContributorToCrowfund(100, accounts[2], 5);
        let previousBalanceAccount0 = web3.eth.getBalance(accounts[0]);
        ethstarterSmartContract.sendToContractor(100);
        assert.equal((web3.eth.getBalance(accounts[0]) - previousBalanceAccount0) > 9, true);
    });
});