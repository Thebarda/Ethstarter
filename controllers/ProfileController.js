var profileModel = require("../models/profile.js");
var idCompte = request.session.idCompte;;

module.exports.afficherProfile = function(request, response){
    response.title="Ethstarter - profile";
    profileModel.getProfile(idCompte, function(err, result){
        if (err) throw err;
        response.profile=result[0];
        response.render("afficherProfile", response);
    });
};
module.exports.modifierProfile = function(request, response){
    response.title="Ethstarter - ModifierProfile";
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