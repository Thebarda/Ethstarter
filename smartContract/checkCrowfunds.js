var campagneModel = require("../models/campagnes");
var ethstarterContract = require("./smartContract/ethstarterContract");

module.exports.checkCrowfunds = function(){
    campagneModel.getAllCrowfundsThatFinishToday(function(err, result){
       for(var i=0;i<result.length;i++){
           if(result[i].montantActuel >= result[i].but){
               ethstarterContract.sendToContributors(result[i].idCampagne);
           }else{
               ethstarterContract.sendToContractor(result[i].idCampagne);
           }
       }
    });
}