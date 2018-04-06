var profilController = require("../controllers/ProfilController");
var profilModel = require("../models/profil");
var notifModel = require("../models/notifications");
var sha256 = require('js-sha256').sha256;

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


module.exports.modifierProfil = function(request, response) {
    var body = request.body;
    console.log("----- Body -----");
    console.log(body);
    console.log("----------------");
    profilModel.updateProfil(idCompte, body, function(err, result){
        if (err) throw err;
        if (request.session.typeCompte == 2) {
            profilModel.updateProfilEntrepreneur(idCompte, body, function(err, result){
                if (err) throw err;
            });
        }
        if(body.oldPassword != "") {
            if ((sha256(body.oldPassword) == request.session.password)) {
                profilModel.updatePassword(idCompte, body, function(err, result){
                    if (err) throw err;
                });
            }
        }
        profilController.getProfil(request, response);
    });
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

        var r = dbres.map(x => { 
            var res = {};
            res[x.name] = x.id;
            return res;
        });

        resp.send(dbres);
    } catch (e) { throw e; };
}