var profilModel = require("../models/profil.js");
var idCompte;

module.exports.afficherProfil = function(request, response){
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
    profilModel.updateProfilEntrepreneur(idCompte, body, function(err, result){
        if (err) throw err;
        response.afficherProfil(request, response);
    });
};