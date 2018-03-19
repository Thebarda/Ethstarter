var profilModel = require("../models/profil.js");
var notifModel = require("../models/notifications");
var ethstarterContract = require("../smartContract/ethstarterContract");
var idCompte;

module.exports.getProfil = function(request, response){
    response.title="Ethstarter - profil";
    idCompte = request.session.idCompte;
    if (request.session.typeCompte == 1) {
        profilModel.getProfilContributeur(idCompte, function(err, result){
            if (err) throw err;
            response.profil = result[0];
            response.render("afficherProfil", response);
        });
    }else{
        profilModel.getProfilEntrepreneur(idCompte, function (err, result) {
            if (err) throw err;
            response.profil = result[0];
            response.render("afficherProfil", response);
        });
    }
};

module.exports.afficherParticipations = function(request, response){
    response.title="Ethstarter - Participations";
    idCompte = request.session.idCompte;
    profilModel.getParticipations(idCompte, function(err, result){
        if (err) throw err;
        response.participation=result;
        response.render("afficherParticipations", response);
    });
};

module.exports.supprimerParticipation = function(request, response){
    var montant = request.body.montant;
    var nomCampagne = request.body.nomCampagne;
    var idContributeur = request.session.idCompte;
    profilModel.delParticipation(nomCampagne, idContributeur, montant, function(err, result){
        if (err) throw err;
        response.render("afficherParticipations", response);
    });
};

module.exports.modifierProfil = function(request, response) {
    var body = request.body;
    console.log("----- Body -----");
    console.log(body);
    console.log("----------------");
    profilModel.updateProfil(idCompte, body, function(err, result){
        if (err) throw err;
        response.render("afficherProfil", response);
    });
    if (request.session.typeCompte == 2) {
        profilModel.updateProfilEntrepreneur(idCompte, body, function(err, result){
            if (err) throw err;
            response.render("afficherProfil", response);
        });
    }
};

module.exports.fetchNbContractorsWaitingForValidation = (req, resp)=>{
  profilModel.fetchNbContractorsWaitingForValidation((err, res) => {
    if (err) throw err;
    resp.response = res[0].nbContractorWaiting;
    resp.render("emptyView",resp);
  });
};


module.exports.fetchContractorsWaitingForValidation = (req, resp) => {
  profilModel.fetchContractorsWaitingForValidation((err, res) => {
    if (err) throw err;
    resp.title = "Entrepreneurs en attente";
    resp.contractors = res;
    resp.render('viewContractorsWaiting', resp);
  });
};

module.exports.updateValidationContractorAccount = (req, resp) => {
  profilModel.updateValidationContractorAccount(req.body.id, req.body.validated, (err, result) => {
      notifModel.addNotification(req.body.id, "Votre compte "+(req.body.validated == 1 ? "a été validé" : 'n\'a pas pu être validé'), (err, result2) => {
          resp.render("emptyView", resp);
      });
  })
};
