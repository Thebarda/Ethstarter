
var db = require('./configDb.js');
var utils = require("../utils/utils");
var sha256 = require('js-sha256').sha256;

module.exports.valide = function(body, callback){
    //vérifie que le login n'est pas déjà prit

    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login FROM utilisateur WHERE login='"+body.login+"';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
}

module.exports.inscrire = function(body, callback){
    var mdp = sha256(body.password);
    db.getConnection(function (err, connexion) {
        if (err) throw err;
        var sql = "INSERT INTO utilisateur (nom, prenom, mail, login, password, addrPubliqueEth, type) VALUES(?,?,?,?,?,?,?);";
        connexion.query(sql, [body.lastname, body.firstname, body.email, body.login, mdp, body.address, body.type], callback);
        connexion.release();
    });
}

module.exports.inscrireEntrepreneur = function(idUtilisateur, nomEntreprise, pieceIdentide, callback){
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "INSERT INTO entrepreneur(idUtilisateur, nomEntreprise, pieceIdentide, validated) VALUES(?,?,?,0);";
            connexion.query(sql, [idUtilisateur, nomEntreprise, pieceIdentide], callback);
            connexion.release();
        }
    });

}
