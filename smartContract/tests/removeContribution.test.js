let Web3 = require("web3");
let ethstarterSmartContract = require('../ethstarterContract');
let assert = require("assert");
let web3 = null;
let accounts = null;
describe("remove contribution", () => {
    before(() => {
        web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
        accounts = web3.eth.accounts;
        ethstarterSmartContract.minerContrat();
    });

    it("should throws an error when idCrowdfund is null", () => {
        assert.throws(
            () => {ethstarterSmartContract.removeContribution(null, accounts[1])},
            "(idCampagne && web3.isAddress(addrContributor)) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when idCrowdfund is undefined", () => {
        assert.throws(
            () => {ethstarterSmartContract.removeContribution(undefined, accounts[1])},
            "(idCampagne && web3.isAddress(addrContributor)) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when it\'s not an address", () => {
        assert.throws(
            () => {ethstarterSmartContract.removeContribution(100, 'notanaddress')},
            "(idCampagne && web3.isAddress(addrContributor)) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should return a valid transaction\'s address", () => {
        ethstarterSmartContract.addCrowfunding(100, accounts[0], 10, 12);
        ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], 1);
        ethstarterSmartContract.addContributorToCrowfund(100, accounts[2], 1);
        ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], 1);
        ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], 1);
        let result = ethstarterSmartContract.removeContribution(100, accounts[1]);
        assert.equal(typeof web3.eth.getTransaction(result), "object");
    }).timeout(10000);
});