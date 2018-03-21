
var modelCampagnes = require ('../models/campagnes.js');
var modelParticipation = require ('../models/participation.js');
var ethstarterContract = require("../smartContract/ethstarterContract");
var notifModel = require('../models/notifications');

module.exports.participation = function(request, response){
    response.title = "Ethstarter - afficherCampagne";
    var _montant = request.body.montant;
    var data = {idContributeur:request.session.idCompte, montant:_montant, idCampagne: request.session.isLookingCampaign};
    modelParticipation.addParticipation(data, function(err, result){
        if(err) throw err;
        modelCampagnes.updateMontant(request.session.isLookingCampaign, _montant, function(err, result){
            if(err) throw err;
            ethstarterContract.addContributorToCrowfund(request.session.isLookingCampaign, request.session.addrPubliqueEth, _montant);
            modelCampagnes.getCampaignById(request.session.isLookingCampaign, (err, result) => {
                notifModel.addNotification(result[0].idEntrepreneur, "Nouvelle contribution de "+_montant+" ether pour votre campagne "+result[0].nomCampagne, (err, result2) => {
                    response.render("emptyView", response);
                });
            });
        });
    });

};