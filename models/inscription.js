var db = require('../configDB.js');

module.exports.nonExisteLogin = function(login, callback){
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
        if(err) return next(err);

        var sql = "INSERT INTO utilisateur " +
        "VALUES('"+body.lastname+"','"+body.firstname+"','"+body.email+"','"+body.login+"','"+body.password+"','"+body.adress+"',1);";
        connexion.query(sql, callback,function(err, results) {
            if (err) return next(err);

            results[0].RESULT;
        });
        connexion.release();
    });
}