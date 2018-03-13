var AccueilController = require("../controllers/AccueilController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');

var CreateController = require("../controllers/CreateController.js");
var InscriptionController = require('./../controllers/InscriptionController.js');
var CampagnesController = require('../controllers/CampagnesController.js');
var ParticipationController = require('../controllers/ParticipationController.js');
var ProfilController = require('../controllers/ProfilController.js');


// Routes
module.exports = function (app) {

    // Exemple
    app.get('/', AccueilController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);
    app.get('/Deconnexion', ConnexionController.deconnexion);

    //Creation campagne
    app.get('/creerCampagne', CreateController.example);
    app.post('/validationCampagne',CreateController.validationCampagne);
    app.get('/Inscription', InscriptionController.inscription);
    app.post('/validationInscriptionContributeur', InscriptionController.validationInscriptionContributeur);
    app.post("/validationInscriptionEntrepreneur", InscriptionController.validationInscriptionEntrepreneur);

    //Affichage campagnes
    app.get('/campaign/:idCampagne', CampagnesController.afficherCampagne);
    app.post('/participation', ParticipationController.participation);
    app.get('/campaigns/', CampagnesController.afficherLesCampagnes);
    app.get('/fetchNbCampagnesWaitingForValidation', CampagnesController.fetchNbCampagnesWaitingForValidation);
    app.get('/campaingsWaiting', CampagnesController.campaingsWaiting);
    app.get('/campaignWaiting/:idCampagne', CampagnesController.campaignWaitign);
    app.post('/updateValidationCampaign', CampagnesController.updateValidationCampaign);

    // Profil
    app.get('/Profil', ProfilController.getProfil);
    app.post('/validationModificationProfil', ProfilController.modifierProfil);
};
