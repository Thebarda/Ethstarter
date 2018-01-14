var ethstarterContract = require("../smartContract/ethstarterContract");
var assert = require('assert');
var sleep = require('sleep');
describe('Test du smart contract', function() {
    before(function() {
        this.timeout(10000);
        ethstarterContract.minerContrat();
        sleep.sleep(2);
    });
    it("should return 0 crowfunding", function () {
        ethstarterContract.addCrowfunding();
       assert.equal(0, ethstarterContract.getNbCrowfundings());
    });
});