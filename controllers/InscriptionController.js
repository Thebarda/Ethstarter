var modelInscription = require('../models/inscription.js');
var utils = require("../utils/utils");

module.exports.inscription=function(request, response){
    response.title="Ethstarter - inscription contributeur";
    response.render('inscription', response);
}

module.exports.validationInscriptionContributeur=function(request, response){
    response.title="Validation inscription";
    var body = request.body;
    response.loginC=body.loginC;
    response.emailC=body.emailC;
    response.nomC=body.lastnameC;
    response.prenomC=body.firstnameC;
    response.addressC=body.addressC;
    response.passwordC=body.passwordC;
    if(!body.passwordC||!body.addressC||!body.firstnameC||!body.lastnameC||!body.emailC||!body.loginC){
        response.erreurInscriptionC="Un des champs est manquant";
        response.render("inscription", response);
        return;
    }
    modelInscription.existeLogin(body.loginC, function(err1, result1){
        if(err1){
            console.log(err);
            return;
        }
        modelInscription.existeMail(body.emailC, function(err2, result2){
            if(err2){
                console.log(err);
                return;
            }
            console.log('eere');
            if(result1.length != 0){
                console.log("Login déjà utilisé");
                response.erreurInscriptionC="Ce login est déjà utilisé";
                response.render("inscription", response);
            }else if(result2.length != 0){
                console.log("E-mail déjà utilisé");
                response.erreurInscriptionC="Cet e-mail est déjà utilisé";
                response.render("inscription", response);
            }else{
                if(utils.isAddress(body.addressC)){
                    modelInscription.inscrireContributeur(body);
                    response.inscrit="Vous êtes maintenant inscrit sur le site";
                    console.log("Inscrit !");
                    response.render("accueil", response);
                }else{
                    console.log("Adresse Ethereum invalide");
                    response.erreurInscriptionC="Adresse Ethereum invalide";
                    response.render("inscription", response);
                }
            }
        });
    });
}
module.exports.validationInscriptionEntrepreneur=function(request, response){
    response.title="Validation inscription";
    var body = request.body;
    console.log(body.piece1 +"    "+ body.piece2);
    response.loginE=body.loginE;
    response.nomEntrepriseE=body.nomEntrepriseE;
    response.emailE=body.emailE;
    response.nomE=body.lastnameE;
    response.prenomE=body.firstnameE;
    response.addressE=body.addressE;
    response.passwordE=body.passwordE;
    if(!body.passwordE||!body.addressE||!body.firstnameE||!body.nomEntrepriseE||!body.lastnameE||!body.emailE||!body.loginE){
        response.erreurInscriptionE="Un des champs est manquant";
        response.render("inscription", response);
        return;
    }
    modelInscription.existeLogin(body.loginE, function(err1, result1){
        if(err1){
            console.log(err);
            return;
        }
        modelInscription.existeMail(body.emailE, function(err2, result2){
            if(err2){
                console.log(err);
                return;
            }
            if(result1.length != 0){
                console.log("Login déjà utilisé");
                response.erreurInscriptionE="Ce login est déjà utilisé";
                response.render("inscription", response);
            }else if(result2.length != 0){
                console.log("E-mail déjà utilisé");
                response.erreurInscriptionE="Cet e-mail est déjà utilisé";
                response.render("inscription", response);
            }else{
                if(utils.isAddress(body.addressE)){
                    modelInscription.inscrireEntrepreneur(body);
                    response.inscrit="Vous êtes maintenant inscrit sur le site";
                    console.log("Inscrit !");
                    response.render("accueil", response);
                }else{
                    console.log("Adresse Ethereum invalide");
                    response.erreurInscriptionE="Adresse Ethereum invalide";
                    response.render("inscription", response);
                }
            }
        });
    });
}
