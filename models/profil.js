var db = require('./configDb.js');

module.exports.getProfilContributeur = function(idCompte, callback){
    db.getConnection(function(err, connection){
        if(err) throw err;
        connection.query("SELECT nom, prenom, mail, login, password, addrPubliqueEth FROM utilisateur WHERE id="+idCompte, callback);
        connection.release();
    });
};

module.exports.getProfilEntrepreneur = function(idCompte, callback){
    db.getConnection(function(err, connection){
        if(err) throw err;
        connection.query("SELECT nom, prenom, mail, login, password, addrPubliqueEth, `nomEntreprise` FROM utilisateur u INNER JOIN entrepreneur e on u.id=e.idUtilisateur WHERE id="+idCompte, callback);
        connection.release();
    });
};

module.exports.updateProfilContributeur = function(idCompte, body, callback){
    db.getConnection(function(err, connection){
        if(err) throw err;
        var sql = "UPDATE INTO utilisateur set nom=?, prenom=?, mail=?, addrPubliqueEth=?  WHERE id=?;";
        connection.query(sql, [body.lastname, body.firstname, body.email, body.address, idCompte], callback);
        connection.release();
    });
};

module.exports.updateProfilEntrepreneur = function(idCompte, body, callback){
    db.getConnection(function(err, connection){
        if(err) throw err;
        var sql = "UPDATE INTO (SELECT nom, prenom, mail, login, addrPubliqueEth, `nomEntreprise` FROM utilisateur u INNER JOIN entrepreneur e on u.id=e.idUtilisateur WHERE id=?) set nom=?, prenom=?, login=?, mail=?, addrPubliqueEth=? nomEntreprise=?;";
        connection.query(sql, [idCompte, body.lastname, body.firstname, body.login, body.email, body.nomEntreprise, body.address], callback);
        connection.release();
    });
};