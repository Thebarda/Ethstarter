var modelInscription = require('../models/inscription.js');

module.exports.inscription=function(request, response){
    response.title="Ethstarter - inscription contributeur";
    response.render('inscription', response);
}

module.exports.validationInscriptionContributeur=function(request, response){
    response.title="Validation inscription";
    var body = request.body;
    if(!modelInscription.existeLogin(body.login)){
        alert('oui 1');
    }
    if(!modelInscription.existeMail(body.email)){
        alert('oui 1');
    }
    if(!modelInscription.inscrire(body)){
        alert('oui 2');
    }

    response.render("accueil", response);
}
