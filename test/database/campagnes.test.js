var assert = require("assert");
var campagnes = require("../../models/campagnes");

describe("Campagnes", function(){
   describe("check crowfunds that finish today", function(){
      it("should at least 1", function(done){
          var data = {idEntrepreneur:1,
              nomCampagne:"campaign",
              but:10,
              montantActuel:2,
              dateLimite:new Date(),
              description:"une description",
              estEnCours:true};
          campagnes.insertCampaign(data, function(err, result){
              assert.equal(err, null);
              assert.equal(result.affectedRows, 1);
              campagnes.getAllCrowfundsThatFinishToday(function(err, result){
                  assert.equal(err, null);
                  assert.equal((result.length>0), true);
                  done();
              });
          });
      });
   });

   describe("insert crowfund into database", function(){
      it("should return 1 row affected", function(done){
          var data = {idEntrepreneur:1,
              nomCampagne:"campaign",
              but:10,
              montantActuel:2,
              dateLimite:new Date(),
              description:"une description",
              estEnCours:true};
         campagnes.insertCampaign(data, function(err, result){
             assert.equal(err, null);
             assert.equal(result.affectedRows, 1);
             done();
         });
      });
   });

   describe("get campagne by id", function(){
      it("should return 1 campaign", function(done){
          var data = {idEntrepreneur:1,
              nomCampagne:"campaign",
              but:10,
              montantActuel:2,
              dateLimite:new Date(),
              description:"une description",
              estEnCours:true};
          campagnes.insertCampaign(data, function(err, result){
              campagnes.getCampaignById(result.insertId, function(err, result){
                  assert.equal(err, null);
                  assert.equal(result.length, 1);
                  done();
              });
          });
      });
   });

   describe("get info entrepreneur by campaign", function(){
      it("should return array length 1", function(done){
        campagnes.getInfosEntrepreneur(1, function(err, result){
          assert.equal(err, null);
          assert.equal(result.length, 1);
          done();
        });
      });
   });
});