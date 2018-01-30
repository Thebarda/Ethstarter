const createModels = require("../models/campagnes");
const ethstarterContract = require("../smartContract/ethstarterContract");


module.exports.example = function(request, response) {
    response.title = "Ethstarter - Projet";
    response.render("creercampagne", response);
};


module.exports.validationCampagne = function(request, response)
{
    response.title = "Ethstarter - Création campagne";
    var nomCampagne = request.body.titreCampagne
    var body = request.body
    createModels.insertCampaign(body, function(err, result){
             if(err){
                console.log(err);
                return;
            }
            else{
                ethstarterContract.addCrowfunding(result.insertid, "0x7619a3873", body.objectif);
                
               
                response.render("accueil",response);
            }
    
    });
    
}
