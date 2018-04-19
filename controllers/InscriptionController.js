var modelInscription = require('../models/inscription.js');
var utils = require("../utils/utils");
var notifModel = require('../models/notifications');
//var fs = require('fs');
//var formidable = require('formidable');
//var fs = require('fs-extra');

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
            if (result[0].rescount == 0) {
                modelInscription.inscrire(body, function (err, result) {
                    if (err) throw err;
                    response.render("connexion", response);
                });
            } 
            else {
                response.error = "Login incorrect";
                response.render("inscription", response);
            }
        });
    }
    else{
        response.title="Ethstarter - inscription";
        response.error = "Adresse publique incorrecte";
        response.render("inscription", response);
    }
}

module.exports.validationInscriptionEntrepreneur = (request, response) => {
    //img handling ---- todo : file upload constrains (see express fileup doc)
    var imgdb = "placeholder2.jpg"
    var accepted = true;
    
    if (request.files.pi){
        var img = request.files.pi;
        var extRegex = /\.[0-9a-z]+$/i; 
        var ext = img.name.match(extRegex);
        var filename = utils.genUUID() + ext[0];
        imgdb = filename;
    
        if (img.mimetype != "image/jpeg" && 
        img.mimetype != "image/bmp" &&
        img.mimetype != "image/png") accepted = false; //check for correct file type 
    }
    else { console.log("file was not upladed - front end") }

    request.body.type = 2;
    if(utils.isAddress(request.body.address)) {
        modelInscription.valide(request.body, function (err, result) {
            if (err) throw err;

            if (result[0].rescount == 0) {
                modelInscription.inscrire(request.body, function (err, result) {
                    console.log("inscr OK");
                    if (err) throw err;

                    modelInscription.inscrireEntrepreneur(result.insertId, request.body.nomEntreprise, imgdb, function (err, result2) {
                        if (err) throw err;
                        
                        notifModel.addNotification(result.insertId, "Vous êtes en attente de validation ", (err, result2) => {

                            if (accepted && request.files.pi) {
                                img.mv("public/PIpics/" + filename, function(err) {
                                    if (err) return err;
                                    console.log("UPLOADED");
                                    response.render("connexion", response);
                                });  
                            }
                            else {
                                response.render("connexion", response);
                            } 
                        });
                    });
                });    
            }
            else {
                response.error = "Login incorrect";
                response.render("inscription", response);
            }
        });
    }
    else {
        response.title="Ethstarter - inscription";
        response.error = "Adresse publique ou Login incorrect";
        response.render("inscription", response);
    }
}


/* module.exports.validationInscriptionEntrepreneurOLD=function(request, response){
    var form = new formidable.IncomingForm();
    form.parse(request, function (err, fields, files) {
        var nomEntreprise = fields.nomEntreprise;
        fields.type=2;
        var tmp = files.image.name.split('.');
        var extension = tmp[tmp.length-1];
        var UUID = utils.genUUID();
        console.log(tmp[tmp.length-1]);
        var path = "./public/PIpics/"+UUID+"."+extension;
        if(utils.isAddress(fields.address)) {
            fs.copy(files.image.path, path, function (err) {
                if (err) {
                    console.error(err);
                    response.error = "Upload de l'image impossible";
                    response.render('inscription', response);
                } else {
                    console.log("success!");
                    modelInscription.valide(fields, function (err, result) {
                        if (err) throw err;
                        if (result.length != 0) {
                            response.error = "Login incorrect";
                            response.render("inscription", response);
                        } else {
                            modelInscription.inscrire(fields, function (err, result) {
                                modelInscription.inscrireEntrepreneur(result.insertId, nomEntreprise, UUID + "." + extension, function (err, result2) {
                                    if (err) throw err;
                                    notifModel.addNotification(result.insertId, "Vous êtes en attente de validation ", (err, result2) => {
                                        response.render("connexion", response);
                                    });
                                });
                            });
                        }
                    });
                }
            });
        }else{
            response.title="Ethstarter - inscription";
            response.error = "Adresse publique incorrecte";
            response.render("inscription", response);
        }  
    });
}   */