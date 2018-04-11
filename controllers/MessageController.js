var msg = require("../models/message");
var notif = require("../models/notifications");
var ts = require("time-stamp");


module.exports.get = async (req, resp) => {
    try {
        var userid = req.session.idCompte;
        var m = await msg.getAll(req.session.idCompte);
        resp.messages = m;

        var n = await notif.getAll(req.session.idCompte);
        resp.notifications = n;
        resp.userid = userid;

        resp.title = "Notifications";
        resp.render("notifications", resp);
    } catch (e) { throw e; }; 
}

module.exports.write = async (req) => {
    var title = req.body.msgTitle;
    var body = req.body.msgBody;
    var timestamp = ts("YYYYMMDDHHmmss");
    try {
        await msg.write(req.session.idCompte, title, body, timestamp, req.body.msgRecipient);
    } catch (e) { throw e; }; 
}

module.exports.delete = async (req) => {
    try {
        await msg.delete(req.body.messageID);
    } catch (e) { throw e; }; 
}