var utils = require("../../utils/utils");
var utilsPublic = require("../../public/javascripts/utilsPublic");
var assert = require("assert");
describe("utils", function(){
   describe("calcule jours restant", function(){
       it("should return 1", function(){
           var dateLimite = new Date().getTime() + (1000*60*60*24);
           assert.equal(utils.calculJourRestant(dateLimite), 1);
       });
       it("should return 0", function(){
           var dateLimite = new Date().getTime();
           assert.equal(utils.calculJourRestant(dateLimite), 0);
       });
       it("should return -1", function(){
           var dateLimite = new Date().getTime() - (1000*60*60*24);
           assert.equal(utils.calculJourRestant(dateLimite), -1);
       });
   });

   describe("check montant contribution", function(){
      it("should return true", function(){
        assert.equal(utilsPublic.checkMontantContribution(1), true);
      });
       it("should return false", function(){
           assert.equal(utilsPublic.checkMontantContribution("1"), false);
       });
       it("should return false", function(){
           assert.equal(utilsPublic.checkMontantContribution(0), false);
       });
   });
});