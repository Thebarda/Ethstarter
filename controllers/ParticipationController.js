var modelCampagnes = require ('../models/campagnes.js');
var modelParticipation = require ('../models/participation.js');
//var ethstarterContract = require("../smartContract/ethstarterContract")

module.exports.participation = function(request, response){
    response.title = "Ethstarter - afficherCampagne";
    var _montant = request.body.montant;
    var data = {idContributeur:1, montant:_montant};
    modelParticipation.addParticipation(data, function(err, result){
        if(err) throw err;
        var data2 = {idCampagne:request.session.isLookingCampaign, idContributeur:1};
        modelCampagnes.addContributeursXCampagne(data2, function(err, result){
            if(err) throw err;
            modelCampagnes.updateMontant(request.session.isLookingCampaign, _montant, function(err, result){
                if(err) throw err;
                //ethstarterContract.addContributorToCrowfund(request.session.isLookingCampaign, "0x74A28E135996627BB8768C63e9983A1Bf9F29645", _montant);
                response.render("emptyView", response);
            });
        });
    });
};