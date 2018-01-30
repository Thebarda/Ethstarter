var modelInscription = require('../models/inscription.js');
var utils = require("../utils/utils");

module.exports.inscription=function(request, response){
    response.title="Ethstarter - inscription contributeur";
    response.render('inscription', response);
}

module.exports.validationInscriptionContributeur=function(request, response){
    response.title="Validation inscription";
    var body = request.body;
    response.login=body.login;
    response.email=body.email;
    response.nom=body.lastname;
    response.prenom=body.firstname;
    response.address=body.address;
    response.password=body.password;
    modelInscription.existeLogin(body.login, function(err1, result1){
        if(err1){
            console.log(err);
            return;
        }
        modelInscription.existeMail(body.email, function(err2, result2){
            if(err2){
                console.log(err);
                return;
            }
            if(result1.length != 0){
                console.log("Login déjà utilisé");
                response.erreurInscription="Ce login est déjà utilisé";
                response.render("inscription", response);
            }else if(result2.length != 0){
                console.log("E-mail déjà utilisé");
                response.erreurInscription="Cet e-mail est déjà utilisé";
                response.render("inscription", response);
            }else{
                if(utils.isAddress(body.address)){
                    modelInscription.inscrireContributeur(body);
                    response.inscrit="Vous êtes maintenant inscrit sur le site";
                    console.log("Inscrit !");
                    response.render("accueil", response);
                }else{
                    console.log("Adresse Ethereum invalide");
                    response.erreurInscription="Adresse Ethereum invalide";
                    response.render("inscription", response);
                }
            }
        });
    });
}

module.exports.validationInscriptionContributeur=function(request, response){

}
