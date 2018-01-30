var modelInscription = require('../models/inscription.js');

module.exports.inscriptionContributeur=function(request, response){
    response.title="Ethstarter - inscription contributeur";
    response.render('inscriptionContributeur', response);
}

module.exports.validationInscriptionContributeur=function(request, response){
    response.title="Validation inscription";
    var body = request.body;
    modelInscription.valide(body, function(err, result){
        if(err){
            console.log(err);
            return;
        }
        if(result.length==0){
            response.erreurLogin="Login incorrect";
        }
        modelInscription.inscrire(body);
    });
    response.render("accueil", response);
}
