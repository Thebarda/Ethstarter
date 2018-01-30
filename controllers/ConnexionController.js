var modelConnexion = require('../models/connexion.js');
//var sha256 = require('js-sha256').sha256;


module.exports.connexion=function(request, response){
    response.title="Ethstarter - connexion";
    response.render('connexion', response);
}


module.exports.validationConnexion = function(request, response){
    response.title="Validation connexion";
    if(request.session.isConnected){
        response.render('accueil', response);
    }else{
        var login = request.body.login;
        var mdp = request.body.mdp;
        modelConnexion.existeLogin(login, function(err, result){
            if(err){
                console.log(err);
                return;
            }
            if(result.length==0){
                response.erreurLogin="Login incorrect";
            }
            // mdp = sha256(mdp);
            modelConnexion.existePasswd(mdp, function(err, result){
                if(result.length==0){
                    response.erreurMdp="Mot de passe incorrect";
                    response.render("connexion", response);
                }else{
                    request.session.login=login;
                    request.session.isConnected="oui";
                    response.render("accueil", response);
                }
            });
        });
    }
}


module.exports.deconnexion=function(request, response){
    response.title="Deconnexion";
    request.session.destroy(function(err){
        if(err){
            console.log(err);
            return;
        }
        response.render('accueil', response);
    });
}
