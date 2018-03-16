var db = require('./configDb.js');

module.exports.getProfil = function(idCompte, callback){
  db.getConnection(function(err, connection){
    if(err) throw err;
    connection.query("SELECT nom, prenom, mail, login, password, addrPubliqueEth, type FROM utilisateur WHERE id="+idCompte, callback);
    connection.release();
  });
};

module.exports.updateProfil = function(idCompte, body, callback){
    db.getConnection(function(err, connection){
        if(err) throw err;
        var sql = "UPDATE INTO utilisateur set nom=?, prenom=?, mail=?, password=?, addrPubliqueEth=?  WHERE id=?;";
        connection.query(sql, [body.lastname, body.firstname, body.email, body.mdp, body.address, idCompte], callback);
        connection.release();
    });
};

module.exports.getParticipations = function(idCompte, callback){
    db.getConnection(function(err, connection){
      if (err) throw err;
      var sql2 = "SELECT nomCampagne, montant FROM participation, campagnes, contributeursxcampagne"; 
      sql2 += " WHERE contributeursxcampagne.idContributeur = participation.idContributeur AND contributeursxcampagne.idCampagne = campagnes.idCampagne"; 
      sql2 += " AND participation.idContributeur="+idCompte;
      connection.query(sql2, callback);
      connection.release();
    });
};
