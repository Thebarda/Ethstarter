var campagnesModel = require("../models/campagnes");
var modelParticipation = require ('../models/participation.js');
var utils = require("../utils/utils");

module.exports.afficherCampagne = function(request, response){
    var idCampagne = request.params.idCampagne;
    campagnesModel.getCampaignById(idCampagne, function(err, result){
       if(err) throw err;
        response.title=result[0].nomCampagne;
        response.campagne = result[0];
        response.pourcentage = (response.campagne.montantActuel/response.campagne.but)*100;
        response.pourcentageAffiche = ((response.campagne.montantActuel/response.campagne.but)*100)>100?100:response.pourcentage;
        response.isFinished = parseInt(utils.calculJourRestant(response.campagne.dateLimite)) < 0 ? true : false;
        response.joursRestants = utils.calculJourRestant(response.campagne.dateLimite);
        request.session.isLookingCampaign = idCampagne;
        modelParticipation.getContributeurs(idCampagne, function(err, result){
           if(err) throw err;
            response.contributeurs = result;
            modelParticipation.getNbContributions(idCampagne, function(err, result){
                if(err) throw err;
                response.nbContributeurs = result[0].nbContributeurs;
                campagnesModel.getInfosEntrepreneur(idCampagne, function(err, result){
                    if(err) throw err;
                    response.nomEntrepreneur = result[0].nom;
                    response.prenomEntrepreneur = result[0].prenom;
                    response.entreprise = result[0].nomEntreprise;
                    if(request.session.isConnected) {
                        modelParticipation.getNbContributionsUserConnected(idCampagne, request.session.idCompte, function (err, result) {
                            if (err) throw err;
                            response.nbContribsss = result[0].nbContribsss;
                            response.render("afficherCampagne", response);
                        });
                    }else{
                        response.nbContribsss = 0;
                        response.render("afficherCampagne", response);
                    }
                });
            });
        });
    });
};

module.exports.afficherLesCampagnes = (req, resp)=>{
    campagnesModel.getAllCampaigns((err, res)=>{
        if (err) throw err;
        resp.title = "Toutes les campagnes";
        resp.campagnes = res;
        resp.render("afficherLesCampagnes", resp);
    });
};

module.exports.fetchNbCampagnesWaitingForValidation = (req, resp)=>{
  campagnesModel.fetchNbCampaignsWaitingForValidation((err, res) => {
    if (err) throw err;
    resp.response = res[0].nbCampaignWaiting;
    resp.render("emptyView",resp);
  });
};


module.exports.campaingsWaiting = (req, resp) => {
  campagnesModel.fetchCampaignsWaitingForValidation((err, res) => {
    if (err) throw err;
    resp.title = "Campagnes en attente";
    resp.campagnes = res;
    resp.render('viewCampaignsWaiting', resp);
  });
};

module.exports.campaignWaitign = function(request, response){
    var idCampagne = request.params.idCampagne;
    campagnesModel.getCampaignById(idCampagne, function(err, result){
       if(err) throw err;
        response.title=result[0].nomCampagne;
        response.campagne = result[0];
        response.pourcentage = (response.campagne.montantActuel/response.campagne.but)*100;
        response.pourcentageAffiche = ((response.campagne.montantActuel/response.campagne.but)*100)>100?100:response.pourcentage;
        response.joursRestants = utils.calculJourRestant(response.campagne.dateLimite);
        request.session.isLookingCampaign = idCampagne;
        modelParticipation.getContributeurs(idCampagne, function(err, result){
           if(err) throw err;
            response.contributeurs = result;
            modelParticipation.getNbContributions(idCampagne, function(err, result){
                if(err) throw err;
                response.nbContributeurs = result[0].nbContributeurs;
                campagnesModel.getInfosEntrepreneur(idCampagne, function(err, result){
                    if(err) throw err;
                    response.nomEntrepreneur = result[0].nom;
                    response.prenomEntrepreneur = result[0].prenom;
                    response.entreprise = result[0].nomEntreprise;
                    response.render('viewCampaignWaiting', response);
                });
            });
        });
    });
};

module.exports.updateValidationCampaign = (req, resp) => {
  campagnesModel.updateValidationCampaign(req.session.isLookingCampaign, req.body.validationNumber, (err, result) => {
    resp.render("emptyView", resp);
  })
}
