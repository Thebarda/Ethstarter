const exampleModels = require("../models/exampleModels");
const ethstarterContract = require("../smartContract/ethstarterContract");

module.exports.example = function (request, response) {
    response.title = "Ethstarter - accueil";
    /*exampleModels.getEditions(function (err, result) {
        if(err) throw err;
        console.log(result);
        response.render("accueil", response);
    });*/
    /*console.log(""+ethstarterContract.addCrowfunding());
    console.log(""+ethstarterContract.getBalance());
    console.log("nbCrowfundings : "+ethstarterContract.getNbCrowfundings());*/
    response.render("accueil", response);
};
