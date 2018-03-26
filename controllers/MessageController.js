var msg = require("../models/message");
var utils = require("../utils/utils");
var ts = require("time-stamp");


module.exports.getAll = async (req, resp) => {
    try {
        var r = await msg.getAll(req.session.idCompte);
        resp.messages = r;
        resp.title = "Mes messages";
        resp.render("afficherMessages", resp);
    } catch (e) { throw e; }; 
}