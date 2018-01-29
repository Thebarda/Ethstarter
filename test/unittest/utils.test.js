var utils = require("../../utils/utils");
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
});