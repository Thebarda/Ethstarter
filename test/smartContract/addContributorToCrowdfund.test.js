let Web3 = require("web3");
let ethstarterSmartContract = require('../../smartContract/ethstarterContract');
let assert = require("assert");
let web3 = null;
let accounts = null;
describe("Add contributor to a crowdfund", () => {
    before(() => {
        web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:42669"));
        accounts = web3.eth.accounts;
        ethstarterSmartContract.minerContrat();
    });

    it("should throws an error when idCrowdfund is null", () => {
        assert.throws(
            () => {ethstarterSmartContract.addContributorToCrowfund(null, accounts[1], 1)},
            "(idCrowfund && web3.isAddress(addrContributor) && montant && montant > 0) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when idCrowdfund is undefined", () => {
        assert.throws(
            () => {ethstarterSmartContract.addContributorToCrowfund(undefined, accounts[1], 1)},
            "(idCrowfund && web3.isAddress(addrContributor) && montant && montant > 0) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when it\'s not an address", () => {
        assert.throws(
            () => {ethstarterSmartContract.addContributorToCrowfund(100, "notanaddress", 1)},
            "(idCrowfund && web3.isAddress(addrContributor) && montant && montant > 0) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when montant is null", () => {
        assert.throws(
            () => {ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], null)},
            "(idCrowfund && web3.isAddress(addrContributor) && montant && montant > 0) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when montant is undefined", () => {
        assert.throws(
            () => {ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], undefined)},
            "(idCrowfund && web3.isAddress(addrContributor) && montant && montant > 0) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when montant is equal to zero", () => {
        assert.throws(
            () => {ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], 0)},
            "(idCrowfund && web3.isAddress(addrContributor) && montant && montant > 0) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should return a valid transaction's address", () => {
        let result = ethstarterSmartContract.addContributorToCrowfund(100, accounts[1], 1);
        assert.equal(typeof web3.eth.getTransaction(result), "object");
    }).timeout(10000);
});
