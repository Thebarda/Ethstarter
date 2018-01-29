var modelInscription = require('../models/inscription.js');
//var sha256 = require('js-sha256').sha256;

module.exports.inscriptionContributeur=function(request, response){
    response.title="Ethstarter - inscription contributeur";
    response.render('inscriptionContributeur', response);
}

module.exports.validationInscriptionContributeur=function(request, response){
    response.title="Validation inscription";
   /* var firstname = request.body.firstname;
    var lastname = request.body.lastname;

    var mdp = request.body.password;
    var email = request.body.email;
    var EthAdress = request.body.adress;*/
    var login = request.body.login;
    var body = request.body;
    modelInscription.existeLogin(login, function(err, result){
        /*if(err){
            console.log(err);
            return;
        }
        if(result.length==0){
            response.erreurLogin="Login incorrect";
        }*/
        // mdp = sha256(mdp);
        modelInscription.inscrire(body, function(err, result){
            alert('capasse');
            /*if(result.length==0){
                response.erreurMdp="Mot de passe incorrect";
                response.render("connexion", response);
            }else{
                request.session.login=login;
                request.session.isConnected="oui";
                response.render("accueil", response);
            }*/
        });
    });
}
