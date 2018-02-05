
var db = require('./configDb.js');

module.exports.verifConnexion=function(login, password, callback){
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login, password, type, addrPubliqueEth, id FROM utilisateur WHERE login='" + login + "' AND password='" + password + "';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
}

