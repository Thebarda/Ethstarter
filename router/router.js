var ExampleController = require("../controllers/ExampleController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');
var CampagnesController = require('../controllers/CampagnesController.js');

// Routes
module.exports = function(app) {

    // Exemple
    app.get('/', ExampleController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);
    app.get('/campaign/:idCampagne', CampagnesController.afficherCampagne);
};
