const createModels = require("../models/campagnes");
const ethstarterContract = require("../smartContract/ethstarterContract");


module.exports.example = function (request, response) {
    response.title = "Ethstarter - Projet";
    response.render("creercampagne", response);
};


module.exports.validationCampagne = function (request, response) {
    response.title = "Ethstarter - Création campagne";
    var body = request.body;
    body.idEntrepreneur = 1;
    createModels.insertCampaign(body, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            ethstarterContract.addCrowfunding(result.insertId, "0x66529fff2c91c83434f8415894711b279448463d", parseInt(body.but));
            response.render("accueil", response);
        }

    });

}
