var AccueilController = require("../controllers/AccueilController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');

var CreateController = require("../controllers/CreateController.js");
var InscriptionController = require('./../controllers/InscriptionController.js');
var CampagnesController = require('../controllers/CampagnesController.js');
var ParticipationController = require('../controllers/ParticipationController.js');
var ProfilController = require('../controllers/ProfilController.js');
var AdministrationController = require("../controllers/AdministrationController.js");
var MessageController = require ("../controllers/MessageController");


// Routes
module.exports = async function (app) {

    // Exemple
    app.get('/', AccueilController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);
    app.get('/Deconnexion', ConnexionController.deconnexion);

    //Creation campagne
    app.get('/mycampaigns', CampagnesController.afficherMesCampagnes);
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

    app.get('/myfavorites', CampagnesController.favorites);
    app.post('/gestfavorite', CampagnesController.gestFavorite);
    app.get('/mycontributions', CampagnesController.contributed);

    //Messages
    app.get('/messages', MessageController.getAll);
    app.post('/messageWrite', MessageController.write);
    app.post('/messageDelete', MessageController.delete);


    //Recherche
    app.post('/search', CampagnesController.searchCampaign);

    // Profil
    //app.get('/Profil', ProfilController.afficherProfil);
    app.get('/modifierProfil', ProfilController.modifierProfil);
    app.get('/fetchNbContractorsWaitingForValidation', ProfilController.fetchNbContractorsWaitingForValidation);
    app.get('/contractorsWaiting', ProfilController.fetchContractorsWaitingForValidation);
    app.get('/updateValidationContractorAccount', ProfilController.updateValidationContractorAccount);

    //Administration
    app.get('/administration', AdministrationController.administration);
    app.get('/fetchAdmin/:type', AdministrationController.fetchAdmin);
};
