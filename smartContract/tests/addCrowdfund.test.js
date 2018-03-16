let Web3 = require("web3");
let ethstarterSmartContract = require('../ethstarterContract');
let assert = require("assert");
let web3 = null;
let accounts = null;
describe("Add crowdfund", () => {
    before(() => {
       web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
       accounts = web3.eth.accounts;
       ethstarterSmartContract.minerContrat();
    });

    it('should throws an error when idCrowdfund is null', () => {
      assert.throws(
          () => {
              ethstarterSmartContract.addCrowfunding(null, accounts[0], 10, 12)
          },
          "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
      );
    }).timeout(10000);
    it('should throws an error when idCrowdfund is undefined', () => {
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(undefined, accounts[0], 10, 12)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when goal is null', () => {
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, accounts[0], null, 12)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when montantMax is null', () => {
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, accounts[0], 10, null)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when goal is undefined', () => {
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, accounts[0], undefined, 12)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when goal is equal to zero', () => {
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, accounts[0], 0, 12)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when montantMax is undefined', () => {
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, accounts[0], 10, undefined)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when address is undefined', () => {
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, undefined, 10, 12)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when address is null', () => {
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, null, 10, 12)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when it\'s not an address', () =>{
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, 'notanaddr', 10, 12)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should throws an error when montantMax is lower than goal', () =>{
        assert.throws(
            () => {
                ethstarterSmartContract.addCrowfunding(100, accounts[0], 10, 8)
            },
            "(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas"
        );
    }).timeout(10000);
    it('should return a valid transaction\'s address', () =>{
        let result = ethstarterSmartContract.addCrowfunding(100, accounts[0], 10, 12);
        assert.equal(typeof web3.eth.getTransaction(result), "object");
    }).timeout(10000);
});