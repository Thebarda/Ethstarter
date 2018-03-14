var profilModel = require("../models/profil.js");
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
  console.log('nani')
  profilModel.updateValidationContractorAccount(req.body.id, req.body.validated, (err, result) => {
    resp.render("emptyView", resp);
  })
}
