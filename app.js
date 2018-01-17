var express = require('express'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'), //pour récupérer les résultats des post
    http = require('http'),
    path = require('path');
var async = require('async');
var readline = require('readline');
var fs = require('fs');
var app = express();
var ethstarterContract = require("./smartContract/ethstarterContract");
var db = require("./models/configDb");
db.testConnection();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', 1047);
app.set('views', path.join(__dirname, 'views'));

// controllers static, le routeur n'y aura pas accès
app.use(express.static(path.join(__dirname, '/public')));

app.use(cookieParser());

app.use(session({
    secret: 'F-%ù!°{@[]&',
    name: 'Ethstarter',
    resave: true,
    saveUninitialized: true
}));

/* ces lignes permettent d'utiliser directement les variables de session dans handlebars
 UTILISATION : {{session.MaVariable}}  */
app.use(function(request, response, next) {
    response.locals.session = request.session;
    next();
});

var exphbs = require('express-handlebars');
app.set('view engine', 'handlebars'); //nom de l'extension des fichiers
var handlebars  = require('./helpers/handlebars.js')(exphbs); //emplacement des helpers
// helpers : extensions d'handlebars


app.engine('handlebars', handlebars.engine);


// chargement du routeur
require('./router/router')(app);
ethstarterContract.minerContrat();

http.createServer(app).listen(app.get('port'), function() {
    console.log('Serveur Ethstarter test en attente sur le port ' + app.get('port'));
});
