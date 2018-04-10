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
            () => {ethstarterSmartContract.setEstEnCours(null, true)},
            "(idCrowfund && estEnCours) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when idCrowdfund is undefined", () => {
        assert.throws(
            () => {ethstarterSmartContract.sendToContributors(undefined, false)},
            "(idCrowfund && estEnCours) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when estEnCours is null", () => {
        assert.throws(
            () => {ethstarterSmartContract.setEstEnCours(100, null)},
            "(idCrowfund && estEnCours) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should throws an error when estEnCours is undefined", () => {
        assert.throws(
            () => {ethstarterSmartContract.setEstEnCours(100, undefined)},
            "(idCrowfund && estEnCours) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it("should returns a valid transaction\'s address when estEnCours is true", () => {
        let result = ethstarterSmartContract.setEstEnCours(100, true);
        assert.equal(typeof web3.eth.getTransaction(result), "object");
    }).timeout(10000);
    it("should returns a valid transaction\'s address when estEnCours is false", () => {
        let result = ethstarterSmartContract.setEstEnCours(100, false);
        assert.equal(typeof web3.eth.getTransaction(result), "object");
    }).timeout(10000);
});
