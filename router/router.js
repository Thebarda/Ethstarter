var AccueilController = require("../controllers/AccueilController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');

var CreateController = require("../controllers/CreateController.js");
var InscriptionController = require('./../controllers/InscriptionController.js');
var CampagnesController = require('../controllers/CampagnesController.js');
var ParticipationController = require('../controllers/ParticipationController.js');
var ProfilController = require('../controllers/ProfilController.js');
var AdministrationController = require("../controllers/AdministrationController.js");
var ContrepartieController = require("../controllers/contrepartiesController");
var MessageController = require ("../controllers/MessageController");
var MailController = require("../controllers/MailController");


// Routes
module.exports = async function (app) {

    // Exemple
    app.get('/', AccueilController.accueil);

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
    //app.get('/campaignStats/:idCampagne', CampagnesController.afficherStatistiquesCampagnes);
    app.post('/participation', ParticipationController.participation);
    app.get('/campaigns/', CampagnesController.afficherLesCampagnes);
    app.get('/fetchNbCampagnesWaitingForValidation', CampagnesController.fetchNbCampagnesWaitingForValidation);
    app.get('/campaingsWaiting', CampagnesController.campaingsWaiting);
    app.get('/campaignWaiting/:idCampagne', CampagnesController.campaignWaitign);
    app.post('/updateValidationCampaign', CampagnesController.updateValidationCampaign);
    app.get('/trendCampaigns',CampagnesController.afficherTrendCampagnes);
    app.get('/myfavorites', CampagnesController.favorites);
    app.post('/gestfavorite', CampagnesController.gestFavorite);
    app.get('/mycontributions', CampagnesController.contributed);
    app.post('/addContrepartie', ContrepartieController.addContrepartie);
    //Commentaire Campagnes
    app.post('/postcomm', CampagnesController.postComm);

    //Messages
    app.get('/notifications', MessageController.get);
    app.post('/messageWrite', MessageController.write);
    app.post('/messageDelete', MessageController.delete);

    //Recherche
    app.post('/search', CampagnesController.searchCampaign); 

    // Profil
    app.get('/Profil', ProfilController.getProfil);
    app.post('/modifierProfil', ProfilController.modifierProfil);
    app.get('/fetchNbContractorsWaitingForValidation', ProfilController.fetchNbContractorsWaitingForValidation);
    app.get('/contractorsWaiting', ProfilController.fetchContractorsWaitingForValidation);
    app.post('/updateValidationContractorAccount', ProfilController.updateValidationContractorAccount);
    app.post('/deleteUser', ProfilController.deleteUser);
    app.post('/deleteUseModerator', ProfilController.deleteUserModerator);

    //Administration
    app.get('/administration', AdministrationController.administration);
    app.get('/fetchAdmin/:type', AdministrationController.fetchAdmin);

    //Mail
    app.get('/sendMail', MailController.sendMail);

    //How it works ?
    app.get('/howitworks', AccueilController.howitworks);

    app.get('*', AccueilController.error404);
};
