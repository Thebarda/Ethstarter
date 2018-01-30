var profileModel = require("../models/profile.js");

module.exports.afficherProfile = function(request, response){
    response.title="Ethstarter - profile";
    var id = request.params.id;
    profileModel.getProfile(id, function(err, result){
        if (err) throw err;
        response.profile=result[0];
        response.render("afficherProfile", response);
    });
};