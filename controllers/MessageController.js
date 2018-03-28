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

module.exports.write = async (req) => {
    var timestamp = ts("YYYYMMDDhhmmss");
    try {
        await msg.write(req.session.idCompte, req.body.msgTitle, req.body.msgContent, timestamp, req.body.msgRecipient);
    } catch (e) { throw e; }; 
}

module.exports.delete = async (req) => {
    try {
        await msg.delete(req.body.messID);
    } catch (e) { throw e; }; 
}