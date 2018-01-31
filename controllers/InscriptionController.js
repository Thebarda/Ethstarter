var modelInscription = require('../models/inscription.js');
var utils = require("../utils/utils");
var fs = require('fs');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs-extra');

module.exports.inscription=function(request, response){
    response.title="Ethstarter - inscription";
    response.render('inscription', response);
}

module.exports.validationInscriptionContributeur=function(request, response){
    var body = request.body;
    body.type = 1;
    console.log(body);
    if(utils.isAddress(body.address)) {
        response.title="Validation inscription";
        modelInscription.valide(body, function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            if (result.length != 0) {
                response.erreurLogin = "Login incorrect";
                response.render("inscription", response);
            }else{
                modelInscription.inscrire(body,function(err, result){
                    if(err) throw err;
                    response.render("connexion", response);
                });
            }
        });
    }else{
        response.title="Ethstarter - inscription";
        response.erreurAddr = "Adresse publique incorrecte";
        response.render("inscription", response);
    }
}

module.exports.validationInscriptionEntrepreneur=function(request, response){
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields, files) {
        var body = util.inspect({fields: fields});
        var lastname = fields.lastname;
        var firstname = fields.firstname;
        var login = fields.login;
        var password = fields.password;
        var nomEntreprise = fields.nomEntreprise;
        var address = fields.address;
        fields.type=2;
        var path = "./public/PIpics/"+lastname+firstname+nomEntreprise+files.image.name;
        fs.copy(files.image.path, path, function (err) {
            if (err) {
                console.error(err);
                response.render('inscription', response);
            } else {
                console.log("success!");
                modelInscription.valide(fields, function(err, result){
                    if(err) throw err;
                    modelInscription.inscrire(fields, function(err, result){
                        modelInscription.inscrireEntrepreneur(result.insertId, nomEntreprise, path, function(err, result){
                           if(err) throw err;
                            response.render("connexion", response);
                        });
                    });
                });
            }
        });
    });
}
