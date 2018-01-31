var modelConnexion = require('../models/connexion.js');
//var sha256 = require('js-sha256').sha256;

// Méthode permettant d'afficher la page de connexion
module.exports.connexion = function (request, response) {
    response.title = "Ethstarter - connexion";
    response.render('connexion', response);
}

// Méthode permettant de vérifier la correspondance du login et du mot de passe
module.exports.validationConnexion = function (request, response) {
    response.title = "Validation connexion";
    if (request.session.isConnected) {
        response.render('accueil', response);
    } else {
        var login = request.body.login;
        var password = request.body.password;

        // Log des champs saisis
        console.log("++++  ID Connexion  ++++");
        console.log("Login : " + login + "\nMDP : " + password);
        console.log("++++++++++++++++++++++++");

        // password = sha256(password);

        // Vérification du login et du mot de passe dans la base de données
        modelConnexion.verifConnexion(login, password, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            if (result.length == 0) {
                console.log("Login ou password incorrect");
                response.erreurConnexion = "Login ou password incorrect !";
                response.render("connexion", response);
            } else {
                console.log("Connecté !");
                request.session.login = login;
                request.session.addrPubliqueEth = result[0].addrPubliqueEth;
                request.session.typeCompte = result[0].type;
                request.session.idCompte = result[0].id;
                request.session.isConnected = true;
                response.render("accueil", response);
            }
        });
    }
}

// Méthode permettant de se déconnecter
module.exports.deconnexion = function (request, response) {
    response.title = "Deconnexion";
    request.session.destroy(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        response.render('deconnexion', response);
        console.log("Déconnecté !");
    });
}