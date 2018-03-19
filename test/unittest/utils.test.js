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

   describe("escape single quotes", function(){
      it("should return j\'approuve", function(){
        assert.equal(utils.escapeSingleQuotes("j'approuve"), "j\'approuve");
      });
      it("should return \'\'\'\'", function(){
        assert.equal(utils.escapeSingleQuotes("''''"), "\'\'\'\'");
      });
      it("should throws an exception for undefined", () => {
         assert.throws(() => {utils.escapeSingleQuotes(undefined)}, 'Cannot read property');
      });
       it("should throws an exception for null", () => {
           assert.throws(() => {utils.escapeSingleQuotes(null)}, 'Cannot read property');
       });
   });
});
