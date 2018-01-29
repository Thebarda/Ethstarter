var db = require('../configDB.js');

module.exports.existeLogin = function(login, callback){
    /*db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login FROM utilisateur WHERE login='"+login+"';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });*/
}

module.exports.inscrire = function(body, callback){
    /*db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login FROM utilisateur WHERE login='"+login+"';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });*/
    alert(body.login);
}