var ExampleController = require("../controllers/ExampleController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');

var CreateController = require("../controllers/CreateController.js");
var InscriptionController = require('./../controllers/InscriptionController.js');
var CampagnesController = require('../controllers/CampagnesController.js');
var ParticipationController = require('../controllers/ParticipationController.js');
<<<<<<< HEAD
=======
var ProfileController = require('./../controllers/ProfileController.js');
>>>>>>> f45409a7774658002ed1f03090a8b502b5338976


// Routes
module.exports = function (app) {

    // Exemple
    app.get('/', ExampleController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);
    app.get('/Deconnexion', ConnexionController.deconnexion);

    //Creation campagne
<<<<<<< HEAD
    app.get('/creerCampagne', CreateController.example);
    app.post('/validationCampagne',CreateController.validationCampagne);
    
    // Inscription
    app.get('/Inscription', InscriptionController.inscription);
    app.post('/validationInscriptionContributeur', InscriptionController.validationInscriptionContributeur);
=======
    app.get('/create', CreateController.example);
    app.post('/validationCampagne', CreateController.validationCampagne);
    // Inscription
    app.get('/Inscription', InscriptionController.inscription);
    app.post('/validationInscriptionContributeur', InscriptionController.validationInscriptionContributeur);
    app.post("/validationInscriptionEntrepreneur", InscriptionController.validationInscriptionEntrepreneur);
>>>>>>> f45409a7774658002ed1f03090a8b502b5338976

    //Affichage campagnes
    app.get('/campaign/:idCampagne', CampagnesController.afficherCampagne);
    app.post('/participation', ParticipationController.participation);
    app.get('/campaigns/', CampagnesController.afficherLesCampagnes);
<<<<<<< HEAD
=======

    // Profile
    app.get('/Profile', ProfileController.afficherProfile);
>>>>>>> f45409a7774658002ed1f03090a8b502b5338976
};
