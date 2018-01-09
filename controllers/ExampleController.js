const exampleModels = require("../models/exampleModels");

module.exports.example = function(request, response) {
    response.title = "Accueil hein";
    /*exampleModels.getEditions(function (err, result) {
        if(err) throw err;
        console.log(result);
        response.render("accueil", response);
    });*/
    response.render("accueil", response);
};
