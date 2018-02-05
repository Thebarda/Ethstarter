var modelCampagnes = require ('../models/campagnes.js');
var modelParticipation = require ('../models/participation.js');
var ethstarterContract = require("../smartContract/ethstarterContract");

module.exports.participation = function(request, response){
    response.title = "Ethstarter - afficherCampagne";
    var _montant = request.body.montant;
    var data = {idContributeur:request.session.idCompte, montant:_montant};
    modelParticipation.addParticipation(data, function(err, result){
        if(err) throw err;
        var data2 = {idCampagne:request.session.isLookingCampaign, idContributeur:request.session.idCompte};
        modelParticipation.checkIfContributorContribute(request.session.isLookingCampaign,request.session.idCompte, function(err, result){
           if(result.length>0){
               modelCampagnes.updateMontant(request.session.isLookingCampaign, _montant, function(err, result){
                   if(err) throw err;
                   ethstarterContract.addContributorToCrowfund(request.session.isLookingCampaign, "0x04333e770677fd8fe33a340cc58c61831c2f31c6", _montant);
                   response.render("emptyView", response);
               });
           }else{
               modelCampagnes.addContributeursXCampagne(data2, function(err, result){
                   if(err) throw err;
                   modelCampagnes.updateMontant(request.session.isLookingCampaign, _montant, function(err, result){
                       if(err) throw err;
                       ethstarterContract.addContributorToCrowfund(request.session.isLookingCampaign, "0x04333e770677fd8fe33a340cc58c61831c2f31c6", _montant);
                       response.render("emptyView", response);
                   });
               });
           }
        });
    });
};