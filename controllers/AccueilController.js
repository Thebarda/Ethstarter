module.exports.example = function(request, response) {
    response.title = "Ethstarter - accueil";
    response.render("accueil", response);
};
