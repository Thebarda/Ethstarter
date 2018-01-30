var db = require('../configDB.js');

module.exports.valide = function(body, callback){
    //vérifie que le login n'est pas déjà prit
    db.getConnection(function(err, connexion){
        if(!err){
            var sql = "SELECT login FROM utilisateur WHERE login='"+login+"';";
            connexion.query(sql, callback);
            connexion.release();
        }
    });
}

module.exports.inscrire = function(body, callback){
    db.getConnection(function(err, connexion){
        if(err) throw err;

        var sql = "INSERT INTO utilisateur (nom, prenom, mail, login, password, addrPubliqueEth, type) VALUES(?,?,?,?,?,?,?);";
        connexion.query(sql,[body.lastname,body.firstname,body.email,body.login,body.password,body.address,'1'],function(err, results) {
            if (err) throw err;
        });
        connexion.release();
    });
}