
const createModels = require("../models/campagnes");
const ethstarterContract = require("../smartContract/ethstarterContract");


module.exports.example = function(request, response) {
    response.title = "Ethstarter - Projet";
    response.render("creercampagne", response);
};


module.exports.validationCampagne = function(request, response)
{
    response.title = "Ethstarter - Création campagne";
    var body = request.body;
    body.idEntrepreneur=request.session.idCompte;
    createModels.insertCampaign(body, function(err, result){
             if(err){
                console.log(err);
                return;
            }
            else{
                ethstarterContract.addCrowfunding(result.insertId, request.session.idCompte, parseInt(body.but));
                response.render("accueil",response);
            }
    });
}