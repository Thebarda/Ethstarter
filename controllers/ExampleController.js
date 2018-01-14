const exampleModels = require("../models/exampleModels");
const ethstarter = require('../smartContract/ethstarterContract');

module.exports.example = function(request, response) {
    response.title = "Accueil hein";
    /*exampleModels.getEditions(function (err, result) {
        if(err) throw err;
        console.log(result);
        response.render("accueil", response);
    });*/
    console.log("salut "+ethstarter.getNbCrowfundings());
    response.render("accueil", response);
};
