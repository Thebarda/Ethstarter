var db = require('../configDb.js');
var sha256 = require('js-sha256').sha256;

module.exports.existeLogin = function(login, callback){
    //vérifie que le login n'est pas déjà prit
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login FROM utilisateur WHERE login='"+login+"';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
}

module.exports.existeMail = function(email, callback){
    //vérifie que le mail n'est pas déjà prit
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT mail FROM utilisateur WHERE mail='"+email+"';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
}

module.exports.inscrireContributeur = function(body){
    var mdp = sha256(body.passwordC);
    db.getConnection(function (err, connexion) {
        if (err) throw err;
        var sql = "INSERT INTO utilisateur (nom, prenom, mail, login, password, addrPubliqueEth, type) VALUES(?,?,?,?,?,?,?);";
        connexion.query(sql, [body.lastnameC, body.firstnameC, body.emailC, body.loginC, mdp, body.addressC, '1']);
        connexion.release();
    });
}

module.exports.inscrireEntrepreneur = function(body){
    var mdp = sha256(body.passwordE);
    db.getConnection(function (err, connexion) {
        if (err) throw err;
        var sql = "INSERT INTO utilisateur (nom, prenom, mail, login, password, addrPubliqueEth, type) VALUES(?,?,?,?,?,?,?);";
        connexion.query(sql, [body.lastnameE, body.firstnameE, body.emailE, body.loginE, mdp, body.addressE, '2']);
        connexion.release();
        var id = result.insertId;
    });
    db.getConnection(function (err, connexion) {
        if (err) throw err;
        var sql = "INSERT INTO entrepreneur (idUtilisateur, nomEntreprise, pieceIdentide) VALUES(?,?,?);";
        connexion.query(sql, [id, body.nomEntrepriseE, 'oui']);
        connexion.release();
    });
}