const createModels = require("../models/campagnes");
const ethstarterContract = require("../smartContract/ethstarterContract");

module.exports.example = function(request, response) {
    response.title = "Ethstarter - Projet";
    response.render("creercampagne", response);
};
