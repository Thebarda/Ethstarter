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
    //body.image = "DUMMY PATH";
    body.validated = 0;

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
}
