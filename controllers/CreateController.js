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
    
    //img handling ---- todo : file upload constrains (see express fileup doc)
    console.log("FD - " + body.descriptionCourte);

    if (!body.coverimg) console.log("file was not upladed - front end");
    var coverimg = body.coverimg;
    if (coverimg.mimetype != "image/jpeg" || 
        coverimg.mimetype != "image/bmp" ||
        coverimg.mimetype != "image/png")
            console.log("FUCK OFF"); //check for correct file type 

    var UUIDname = "mock";
    var extRegex = /\.[0-9a-z]+$/i; 
    var ext = coverimg.name.match(extRegex);
    body.image = UUIDname + ext; //HAS TO CHANGE, USING UUID

    coverimg.mv('../public/images/uploads/' + UUIDname + ext , function(err) { //USE A PROMISE
        if (err) return err;

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
                    response.render("emptyView", response);
                });
            }
        });
    });
}
