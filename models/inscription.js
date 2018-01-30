var db = require('../configDb.js');
var utils = require("../utils/utils");
var sha256 = require('js-sha256').sha256;

module.exports.valide = function(body){
    //vérifie que le login n'est pas déjà prit
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login FROM utilisateur WHERE login='"+body.login+"';";
            connexion.query(sql, function(err, results) {
                if (err) throw err
                if(typeof results[0] !== 'undefined') return false;
            });
            connexion.release();
        }
    });

    //vérifie que le mail n'est pas déjà prit
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT mail FROM utilisateur WHERE mail='"+body.email+"';";
            connexion.query(sql, function(err, results) {
                if (err) throw err
                if(typeof results[0] !== 'undefined') return false;
            });
            connexion.release();
        }
    });
    return true;
}

module.exports.inscrire = function(body){
    var mdp = sha256(body.password);
    console.log(utils.isAddress(body.address));
    if (!utils.isAddress(body.address)) return false;
    console.log(utils.isAddress(body.address));
    db.getConnection(function (err, connexion) {
        if (err) throw err;
        var sql = "INSERT INTO utilisateur (nom, prenom, mail, login, password, addrPubliqueEth, type) VALUES(?,?,?,?,?,?,?);";
        connexion.query(sql, [body.lastname, body.firstname, body.email, body.login, mdp, body.address, '1'], function (err, results) {
            if (err) throw err;
        });
        connexion.release();
    });
}