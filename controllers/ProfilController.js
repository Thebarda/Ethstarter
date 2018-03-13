var profilModel = require("../models/profil.js");
var idCompte;

module.exports.afficherProfil = function(request, response){
    response.title="Ethstarter - profil";
    idCompte = request.session.idCompte;
    profilModel.getProfil(idCompte, function(err, result){
        if (err) throw err;
        response.profil=result[0];
        response.render("afficherProfil", response);
    });
};
module.exports.modifierProfil = function(request, response){
    response.title="Ethstarter - ModifierProfil";
    var body = request.body;
    profilModel.getProfil(idCompte, function(err, result){
        if (err) throw err;
        response.profil=result[0];
    });
    /*body.nom = profil.nom.toString();
    body.prenom = profil.prenom.toString();
    body.mailConfirm = profil.mail.toString();
    body.mailConfirm = profil.mail.toString();
    body.addrPubliqueEth = profil.addrPubliqueEth.toString();*/
    response.render("modifierProfil", response);
};

module.exports.enrgModification = function(request, response) {
    var body = request.body;
    profilModel.updateProfil(idCompte, body, function(err, result){
        if (err) throw err;
        response.render("afficherProfil", response);
    });

    profilModel.getProfil(idCompte, function(err, result){
        if (err) throw err;
        response.profil=result[0];
        response.render("afficherProfil", response);
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
  console.log('nani')
  profilModel.updateValidationContractorAccount(req.body.id, req.body.validated, (err, result) => {
    resp.render("emptyView", resp);
  })
}
