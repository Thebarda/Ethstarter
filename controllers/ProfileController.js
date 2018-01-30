var profileModel = require("../models/profile.js");

module.exports.afficherProfile = function(request, response){
    response.title="Ethstarter - profile";
    var id = request.params.id;
    profileModel.getProfile(id, function(err, result){
        if (err) throw err;
        response.profile=result[0];
        response.nom=response.profile.nom;
        response.prenom=response.profile.prenom;
        response.mail=response.profile.mail;
        response.login=response.profile.login;
        response.addrPubliqueEth=response.profile.addrPubliqueEth;
        response.type=response.profile.type;
        response.render("afficherProfile", response);
    });
};