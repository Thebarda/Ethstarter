var assert = require("assert");
var participation = require("../models/participation");
var campagnes = require("../models/campagnes");

describe("Participations", function(){
   describe("Ajout d'une participation", function(){
      it("should return 0 row affected for both participation and contributeursxcampagne tables", function(done){
          var data = {idContributeur:1, montant:1};
          participation.addParticipation(data, function(err, result){
             assert.equal(err, null);
             var data2 = {idCampagne:1, idContributeur:1};
            campagnes.addContributeursXCampagne(data2, function(err, result){
               assert.equal(err, null);
               campagnes.updateMontant(1, 1, function(err, result){
                   assert.equal(err, null);
                   assert.equal(result.affectedRows, 1);
                   done();
               });
            });
          });
      });
   });
   describe("get contributeurs", function(){
      it("should return array length greater than 0", function(done){
         participation.getContributeurs(1, function(err, result){
            assert.equal(err, null);
            assert.equal((result.length > 0), true);
            done();
         });
      });
   });

    describe("get nb contributeurs", function(){
        it("should return array length greater than 0", function(done){
            participation.getNbContributions(1, function(err, result){
                assert.equal(err, null);
                assert.equal((result[0].nbContributeurs > 0), true);
                done();
            });
        });
    });
});