var modelInscription = require('../models/inscription.js');
var utils = require("../utils/utils");

module.exports.inscription = function (request, response) {
    response.title = "Ethstarter - inscription";
    response.render('inscription', response);
}

module.exports.validationInscriptionContributeur = function (request, response) {
    var body = request.body;
    console.log(body);
    if (utils.isAddress(body.address)) {
        response.title = "Validation inscription";
        modelInscription.valide(body, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            if (result.length == 0) {
                response.erreurLogin = "Login incorrect";
            }
            modelInscription.inscrire(body);
        });
        response.render("connexion", response);
    } else {
        response.title = "Ethstarter - inscription";
        response.erreurAddr = "Adresse publique incorrecte";
        response.render("inscription", response);
    }
}
