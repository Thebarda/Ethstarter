const exampleModels = require("../models/exampleModels");
const Web3 = require('web3');

module.exports.example = function(request, response) {
    response.title = "Accueil hein";
    /*exampleModels.getEditions(function (err, result) {
        if(err) throw err;
        console.log(result);
        response.render("accueil", response);
    });*/
    if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    console.log(web3);
    response.render("accueil", response);
};
