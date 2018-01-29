var db = require('./configDb.js');

module.exports.existeLogin = function(login, callback){
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login FROM utilisateur WHERE login='"+login+"';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
}

module.exports.existePasswd=function(mdp, callback){
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT password FROM utilisateur WHERE password='"+mdp+"';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
}
