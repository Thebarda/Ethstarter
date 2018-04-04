var notificationsModel = require("../models/notifications");
var campagneModel = require("../models/campagnes");

module.exports.accueil = function(request, response) {
    if(request.session.typeCompte === 2) {
        notificationsModel.fetchNotificationsForSevenDays(request.session.idCompte, (err, result) => {
            if(err) throw err;
            response.notifLength = result.length;
            response.notifications = result;
            campagneModel.getLast10Campaigns((err, result) => {
                response.campagnes = result;
                response.title = "Ethstarter - accueil";
                response.render("accueil", response);
            });
        });
    } else {
        response.notifLength = -1;
        campagneModel.getLast10Campaigns((err, result) => {
            response.campagnes = result;
            response.title = "Ethstarter - accueil";
            response.render("accueil", response);
        });
    }
};

module.exports.error404 = (req,resp) => {
    resp.title = "Erreur 404";
    resp.render("error404", resp);
};

module.exports.howitworks = (req,resp) => {
    resp.title = "Comment ça marche ?";
    resp.render("howitworks", resp);
};

