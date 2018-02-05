var profileModel = require("../models/profile.js");
var idCompte;

module.exports.afficherProfile = function(request, response){
    response.title="Ethstarter - profile";
    idCompte = request.session.idCompte;
    profileModel.getProfile(idCompte, function(err, result){
        if (err) throw err;
        response.profile=result[0];
        response.render("afficherProfile", response);
    });
};
module.exports.modifierProfile = function(request, response){
    response.title="Ethstarter - ModifierProfile";
    var body = request.body;
    profileModel.getProfile(idCompte, function(err, result){
        if (err) throw err;
        response.profile=result[0];
    });
    /*body.nom = profile.nom.toString();
    body.prenom = profile.prenom.toString();
    body.mailConfirm = profile.mail.toString();
    body.mailConfirm = profile.mail.toString();
    body.addrPubliqueEth = profile.addrPubliqueEth.toString();*/
    response.render("modifierProfile", response);
};

module.exports.enrgModification = function(request, response) {
    var body = request.body;
    profileModel.updateProfile(idCompte, body, function(err, result){
        if (err) throw err;
        response.render("afficherProfile", response);
    });

    profileModel.getProfile(idCompte, function(err, result){
        if (err) throw err;
        response.profile=result[0];
        response.render("afficherProfile", response);
    });
};