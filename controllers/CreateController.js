
const createModels = require("../models/campagnes");
const ethstarterContract = require("../smartContract/ethstarterContract");
const utils = require("../utils/utils");
const formidable = require('formidable');
const fs = require('fs-extra');


module.exports.example = function(request, response) {
    response.title = "Ethstarter - Projet";
    response.render("creercampagne", response);
};


module.exports.validationCampagne = function (request, response) {
    response.title = "Ethstarter - Création campagne";
    var body = request.body;
    body.idEntrepreneur = request.session.idCompte;
    body.image = "DUMMY PATH";

    createModels.insertCampaign(body, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            ethstarterContract.addCrowfunding(result.insertId, request.session.addrPubliqueEth, parseInt(body.but));
            response.render("accueil", response);
        }
    });
}