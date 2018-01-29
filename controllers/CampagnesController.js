var campagnesModel = require("../models/campagnes");

module.exports.afficherCampagne = function(request, response){
    var idCampagne = request.params.idCampagne;
    campagnesModel.getCampaignById(idCampagne, function(err, result){
       if(err) throw err;
        response.title=result[0].nomCampagne;
        response.campagne = result[0];
        response.pourcentage = (response.campagne.montantActuel/response.campagne.but)*100;
        response.pourcentageAffiche = ((response.campagne.montantActuel/response.campagne.but)*100)>100?100:response.pourcentage;
        var dayResteTmp = new Date(response.campagne.dateLimite).getTime() - new Date().getTime();
        response.joursRestants = (dayResteTmp / (1000*60*60*24)).toFixed(0);
        response.render("afficherCampagne", response);
    });
};