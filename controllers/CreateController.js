const createModels = require("../models/campagnes");
const ethstarterContract = require("../smartContract/ethstarterContract");
const notifModel = require('../models/notifications');
const utils = require("../utils/utils");


module.exports.createForm = function(request, response) {
    response.title = "Ethstarter - Projet";
    response.render("creercampagne", response);
};


module.exports.validationCampagne = function (request, response) {
    response.title = "Ethstarter - Création campagne";
    var body = request.body;
    body.idEntrepreneur = request.session.idCompte;
    body.validated = 0;
    body.image = "placeholder2.jpg"
    
    //img handling ---- todo : file upload constrains (see express fileup doc)
    var coverimg = request.files.coverimg;
    var accepted = true;

    if (coverimg){
        var extRegex = /\.[0-9a-z]+$/i; 
        var ext = coverimg.name.match(extRegex);
        var filename = utils.genUUID() + ext[0];
        body.image = filename;

        if (coverimg.mimetype != "image/jpeg" && 
        coverimg.mimetype != "image/bmp" &&
        coverimg.mimetype != "image/png") accepted = false; //check for correct file type 
    }
    else { console.log("file was not upladed - front end") }

    createModels.insertCampaign(body, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            response.response = result.insertId;
            ethstarterContract.addCrowfunding(result.insertId, request.session.addrPubliqueEth, parseInt(body.but), parseInt(body.montantMax));
            var texte = "Votre campagne "+body.nomCampagne+" est en attente de validation";
            notifModel.addNotification(request.session.idCompte, texte, (err, result2) => {
            
                if (accepted && coverimg) {
                    coverimg.mv("public/images/uploads/" + filename, function(err) {
                        if (err) return err;
                        console.log("UPLOADED");
                        response.render("emptyView", response);
                    });  
                }
                else {
                    response.render("emptyView", response);
                }    
            });
        }
    });
}
