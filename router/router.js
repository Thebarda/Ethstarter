var ExampleController = require("../controllers/ExampleController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');
<<<<<<< HEAD
var ParticipationController = require('./../controllers/ParticipationController.js');
=======
var CampagnesController = require('../controllers/CampagnesController.js');
>>>>>>> 86f07d125bfa260f79577aafad7dccfc3aae48d3

// Routes
module.exports = function(app) {

    // Exemple
    app.get('/', ExampleController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);
<<<<<<< HEAD

    // Partcicipation
    app.post('/validationParticipation', ParticipationController.validationParticipation);
=======
    app.get('/campaign/:idCampagne', CampagnesController.afficherCampagne);
>>>>>>> 86f07d125bfa260f79577aafad7dccfc3aae48d3
};
