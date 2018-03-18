var notificationsModel = require("../models/notifications");
module.exports.accueil = function(request, response) {
    if(request.session.typeCompte === 2) {
        notificationsModel.fetchNotificationsForSevenDays(request.session.idCompte, (err, result) => {
            if(err) throw err;
            response.notifLength = result.length;
            response.notifications = result;
            response.title = "Ethstarter - accueil";
            response.render("accueil", response);
        });
    } else {
        response.notifLength = -1;
        response.title = "Ethstarter - accueil";
        response.render("accueil", response);
    }
};
