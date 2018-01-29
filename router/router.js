var ExampleController = require("../controllers/ExampleController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');
var ParticipationController = require('./../controllers/ParticipationController.js');

// Routes
module.exports = function(app) {

    // Exemple
    app.get('/', ExampleController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);

    // Partcicipation
    app.post('/validationParticipation', ParticipationController.validationParticipation);
};
