var profilController = require("../controllers/ProfilController");
var profilModel = require("../models/profil");
var notifModel = require("../models/notifications");
var modelCampagnes = require ('../models/campagnes.js');
var ethstarterContract = require("../smartContract/ethstarterContract");
var sha256 = require('js-sha256').sha256;

var idCompte;
var compteType;

module.exports.getProfil = function(request, response){
    response.title="Ethstarter - profil";
    idCompte = request.session.idCompte;
    compteType = request.session.typeCompte;
    if (request.session.typeCompte == 1) {
        profilModel.getProfilContributeur(idCompte, function(err, result){
            if (err) throw err;
            response.profil = result[0];
            response.profil.type = compteType;
            response.render("afficherProfil", response);
        });
    }else{
        profilModel.getProfilEntrepreneur(idCompte, function (err, result) {
            if (err) throw err;
            response.profil = result[0];
            response.profil.type = compteType;
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
        result.map((participation)=>{
            participation.montantTot = participation.montantTot.toFixed(2);
        })
        response.render("afficherParticipations", response);
    });
};

module.exports.supprimerParticipation = function(request, response){
    var _montantTot = request.body.montant;
    var _nomCampagne = request.body.nomCampagne;
    var idContributeur = request.session.idCompte;
    console.log(request.session.addrPubliqueEth);
    modelCampagnes.getIdCampagne(_nomCampagne, function(err, result){
        if (err) throw err;
        var idCampagne = result[0].idCampagne;
        profilModel.delParticipation(idCampagne, idContributeur, function(err, result){
            if (err) throw err;
            modelCampagnes.updateMontantActuelCampagne(_montantTot, idCampagne, function(err, result){
                if (err) throw err;
                    ethstarterContract.removeContribution(idCampagne, request.session.addrPubliqueEth);
                    response.render("afficherParticipations", response);
            });
        });
    });
};

module.exports.modifierProfil = function(request, response) {
    var body = request.body;
    var password = request.session.password;
    console.log("----- Body -----");
    console.log(body);
    console.log("----------------");
    profilModel.updateProfil(idCompte, body, function(err, result){
        if (err) throw err;
        if (compteType == 2) {
            profilModel.updateProfilEntrepreneur(idCompte, body, function(err, result){
                if (err) throw err;
                profilController.updatePassword (request, response, idCompte, body, password);
            });
        }else{
            profilController.updatePassword (request, response);
        }
    });
};


module.exports.updatePassword = function(request, response, idCompte, body, password) {
    if(body.oldPassword != "") {
        if ((sha256(body.oldPassword) === password)) {
            profilModel.updatePassword(idCompte, body, function (err, result) {
                if (err) throw err;
                profilController.getProfil(request, response);
            });
        }
    }else{
        profilController.getProfil(request, response);
    }
}

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

module.exports.deleteUser = (req, resp) => {
  resp.title = "Ethstarter";
  profilModel.deleteUser(req.session.idCompte, (err, result) => {
      req.session.destroy(function(err){
          if(err){
              console.log(err);
              return;
          }
          resp.render('emptyView', resp);
      });
  });
};

module.exports.deleteUserModerator = (req, resp) => {
  resp.title = "Ethstarter";
    profilModel.deleteUser(req.body.idUser, (err, result) => {
        resp.render('emptyView', resp);
    });
};

module.exports.list = async (req, resp) => {
    try {
        var dbres = await profilModel.getUsers();

        var r = dbres.reduce((curr, next) => {
            curr[next.name] = next.id;
            return curr
        }, {});

        resp.send(r);
    } catch (e) { throw e; };
}
