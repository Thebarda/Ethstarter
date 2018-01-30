var ExampleController = require("../controllers/ExampleController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');
var InscriptionController = require('./../controllers/InscriptionController.js');

// Routes
module.exports = function(app) {

    // Exemple
    app.get('/', ExampleController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);

    // Inscription
    app.get('/Inscription', InscriptionController.inscription);
    app.post('/validationInscriptionContributeur', InscriptionController.validationInscriptionContributeur);
};
