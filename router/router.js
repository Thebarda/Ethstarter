var ExampleController = require("../controllers/ExampleController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');

var CreateController =  require("../controllers/CreateController.js");
var InscriptionController = require('./../controllers/InscriptionController.js');
var CampagnesController = require('../controllers/CampagnesController.js');
var ParticipationController = require('../controllers/ParticipationController.js');
var ProfileController = require('./../controllers/ProfileController.js');


// Routes
module.exports = function(app) {

    // Exemple
    app.get('/', ExampleController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);
    app.get('/Deconnexion', ConnexionController.deconnexion);

    //Creation campagne
    app.get('/create', CreateController.example);
    app.post('/validationCampagne',CreateController.validationCampagne);
    // Inscription
    app.get('/Inscription', InscriptionController.inscription);
    app.post("/validationInscriptionEntrepreneur", InscriptionController.validationInscriptionEntrepreneur);

    //Affichage campagnes
    app.get('/campaign/:idCampagne', CampagnesController.afficherCampagne);
    app.post('/participation', ParticipationController.participation);


    // Profile
    app.get('/Profile', ProfileController.afficherProfile);

    app.get('/campaigns/', CampagnesController.afficherLesCampagnes);

};
