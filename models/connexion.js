var db = require('./configDb.js');

module.exports.verifConnexion=function(login, password, callback){
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login, password FROM utilisateur WHERE login='" + login + "' AND password='" + password + "';";
            console.log("---------  SQL  ---------");
            console.log(sql);
            console.log("-------------------------");
            connexion.query(sql, callback);
            connexion.release();
        }
    });
}
