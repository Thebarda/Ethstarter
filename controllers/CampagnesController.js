var campagnesModel = require("../models/campagnes");
var modelParticipation = require ('../models/participation.js');
var utils = require("../utils/utils");
var notifModel = require('../models/notifications');

module.exports.afficherCampagne = async (request, response) => {
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
        campagnesModel.getComm(idCampagne, function(err,result){
            if(err) throw err;
                result.reverse();
                response.commentaires = result;
                campagnesModel.getListContreparties(idCampagne, (e,result)=>{
                    if(e) throw e;
                    response.contreparties = result;
                    modelParticipation.getContributeurs(idCampagne, function(err, result){
                    if(err) throw err;
                        response.contributeurs = result;
                        modelParticipation.getNbContributions(idCampagne, function(err, result){
                            if(err) throw err;
                            response.nbContributeurs = result[0].nbContributeurs;
                            campagnesModel.getNbComm(idCampagne,function(err,result){
                                if(err) throw err;
                                response.nbComms = result[0].nbComms;
                                console.log("nbComms: " + response);
                                campagnesModel.getInfosEntrepreneur(idCampagne, function(err, result){
                                if(err) throw err;
                                response.nomEntrepreneur = result[0].nom;
                                response.prenomEntrepreneur = result[0].prenom;
                                response.entreprise = result[0].nomEntreprise;
                                if(request.session.isConnected) {
                                    modelParticipation.getNbContributionsUserConnected(idCampagne, request.session.idCompte, function (err, result) {
                                        if (err) throw err;
                                        response.nbContribsss = result[0].nbContribsss;
                                        console.log("ctrlr : " + idCampagne);
                                    });
                                    campagnesModel.hasContributed(request.session.idCompte,idCampagne, (e, res)=>{
                                        console.log("query ok");
                                        if (e) throw e;
                                        response.hasCont = res[0] == null ? 0 : 1;
                                        console.log("hasCont? : " + response.hasCont); 
                                        response.render("afficherCampagne", response);
                                    });
                                    campagnesModel.isFavorite(request.session.idCompte,idCampagne, (e, res)=>{
                                        console.log("query ok");
                                        if (e) throw e;
                                        response.isFav = res[0] == null ? 0 : 1;
                                        console.log("isFav? : " + response.isFav); 
                                        response.render("afficherCampagne", response);
                                    });
                            
                        }
                        else{
                            response.nbContribsss = 0;
                            response.render("afficherCampagne", response);
                        };
                    });
                });
            });
        });
    });
});
});
};

module.exports.afficherStatistiquesCampagnes = function(request, response){
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
        campagnesModel.getComm(idCampagne, function(err,result){

            if(err) throw err;
            response.commentaires = result;
            console.log("test :" + response.commentaires);
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
                                console.log("ctrlr : " + idCampagne);
                            });
                            campagnesModel.hasContributed(request.session.idCompte,idCampagne, (e, res)=>{
                                console.log("query ok");
                            if (e) throw e;
                            response.hasCont = res[0] == null ? 0 : 1;
                            console.log("hasCont? : " + response.hasCont);
                            response.render("afficherStatsCampagne", response);
                        });

                            campagnesModel.isFavorite(request.session.idCompte,idCampagne, (e, res)=>{
                                console.log("query ok");
                            if (e) throw e;
                            response.isFav = res[0] == null ? 0 : 1;
                            console.log("isFav? : " + response.isFav);
                        });

                        }else{
                            response.nbContribsss = 0;
                            response.render("afficherStatsCampagne", response);
                        };
                    });
                });
            });
        });
    });
};

module.exports.afficherMesCampagnes = (req, resp) => {
    campagnesModel.getMyCampaigns(req.session.idCompte, (e, res)=>{
        if (e) throw e;
        resp.title = "Mes Campagnes";
        resp.campagnes = res;
        resp.render("afficherLesCampagnes", resp);
    });
};

module.exports.afficherLesCampagnes = async (req, resp) => {
    try {
        var r = await campagnesModel.getAllCampaigns();
        resp.campagnes = r;
        resp.title = "Toutes les campagnes";
        resp.render("afficherLesCampagnes", resp);
    } catch (e) { throw e; }; 
}

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
    var tmp = utils.escapeSingleQuotes(req.body.descriptionValidation);
    campagnesModel.updateValidationCampaign(req.session.isLookingCampaign, req.body.validationNumber, tmp, (err, result) => {
        campagnesModel.getCampaignById(req.session.isLookingCampaign, (err, result) => {
            var valid = req.body.validationNumber == 1 ? "a été validé" : "n\'a pas pu être validé";
            notifModel.addNotification(result[0].idEntrepreneur, "Votre campagne "+req.body.titre+" "+valid, (err, result2) => {
                resp.render("emptyView", resp);
            });
        });
    });
}


module.exports.searchCampaign = async (req, response) => {
    var search = utils.escapeSingleQuotes(req.body.search);
    try {
        response.campagnes = await campagnesModel.searchAnyCampaign(search);
        response.title = "Recherche pour " + search;
        response.render("afficherLesCampagnes", response);
    } catch (e) { throw e; };    
};


module.exports.favorites = async (req, resp) => {
    try  {
        var r = await campagnesModel.favorites(req.session.idCompte);
        resp.title = "Campagnes favorites";
        resp.campagnes = r;
        resp.render("afficherLesCampagnes", resp);
    } catch (e) { throw e; };
};


module.exports.gestFavorite = async (req) => {
    if (req.body.isFav == 0) {
        try {
            await campagnesModel.addFavorite(req.session.idCompte, req.body.currentCamp);
        } catch (e) { throw e; };
    }
    else {
        try {
            await campagnesModel.remFavorite(req.session.idCompte, req.body.currentCamp);
        } catch (e) { throw e; };
    }
}


module.exports.postComm = (req,resp) => {
    var body = req.body;
    var comm = body.comm;
    var currentCamp = body.currentCamp;
    var user = req.session.idCompte;
    console.log("body: " + body +  "commentaire: "+ comm + " campagne:" +currentCamp + " user:" + user);

    campagnesModel.addComm(user,currentCamp,comm,(e)=>{
        if(e) throw e;
        resp.render("emptyView", resp);
    });
};


module.exports.contributed = async (req, resp) => {
    try {
        var r = await campagnesModel.contributed(req.session.idCompte);
        resp.title = "Mes contributions";
        resp.campagnes = r; 
        resp.render("afficherLesCampagnes", resp);
    } catch (e) {throw e;};   
};
