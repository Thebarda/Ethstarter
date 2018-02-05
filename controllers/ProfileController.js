var profileModel = require("../test/models/profile.js");

module.exports.afficherProfile = function(request, response){
    response.title="Ethstarter - profile";
    var idCompte = request.idCompte;
    profileModel.getProfile(idCompte, function(err, result){
        if (err) throw err;
        response.profile=result[0];
        response.render("afficherProfile", response);
    });
};