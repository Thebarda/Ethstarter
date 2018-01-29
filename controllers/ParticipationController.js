
var modelCampagnes = require ('../models/campagnes.js');
var modelParticipation = require ('../models/participation.js');

module.exports.validationParticipation = function(request, response){
    response.title = "Ethstarter - campagne";
    var montant = request.body.montant;
    var data = {idContributeur, montant};
    modelParticipation.addParticipation(data, function(err, result){
        if(err){
            console.log(err);
            return;
        }
    });
    var data = {idCampagne, idContributeur};
    modelCampagnes.addContributeursXCampagne(data, function(err, result){
        if(err){
            console.log(err);
            return;
        }
    });
    modelCampagnes.updateMontant(idCampagne, montant, function(err, result){
        if(err){
            console.log(err);
            return;
        }
    });
    response.render("campagne", response);
}