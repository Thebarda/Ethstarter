var ExampleController = require("../controllers/ExampleController.js");
var ConnexionController = require('./../controllers/ConnexionController.js');
var CreateController =  require("../controllers/CreateController.js");


// Routes
module.exports = function(app) {

    // Exemple
    app.get('/', ExampleController.example);

    // Connexion
    app.get('/Connexion', ConnexionController.connexion);
    app.post('/validationConnexion', ConnexionController.validationConnexion);
    //Creation campagne
    app.get('/create', CreateController.example);

};
