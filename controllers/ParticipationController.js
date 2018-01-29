
var modelCampagne = require ('../models/campagnes.js');
var modelCampagne = require ('../models/participation.js');

module.exports.validationParticipation = function(request, response){
    response.title = "Ethstarter - campagne";
    var montant = request.body.montant;
    var data = {idContributeur, montant};
    modelCampagne.addParticipation(data, function(err, result){
        if(err){
            console.log(err);
            return;
        }
    });
    modelCampagne.addContributeursXCampagne(data, function(err, result){
        if(err){
            console.log(err);
            return;
        }
    });
    modelCampagne.updateMontant(idCampagne, montant, function(err, result){
        if(err){
            console.log(err);
            return;
        }
    });
    response.render("campagne", response);
};