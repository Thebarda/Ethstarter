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

module.exports.fetchNbContractorsWaitingForValidation = function(callback){
  db.getConnection(function (err, connection) {
      connection.query("SELECT COUNT(`idUtilisateur`) AS nbContractorWaiting " +
          "FROM entrepreneur e INNER JOIN utilisateur u ON u.id=e.idUtilisateur WHERE validated=0", callback);
      connection.release();
  });
};

module.exports.fetchContractorsWaitingForValidation = (callback) => {
  db.getConnection(function (err, connection) {
      connection.query("SELECT `id`, `nom`, `prenom`, `mail`, `login`, `pieceIdentide` FROM `utilisateur` u "+
      "INNER JOIN entrepreneur e ON e.idUtilisateur = u.id WHERE e.validated = 0", callback);
      connection.release();
  });
}

module.exports.updateValidationContractorAccount = (id, validated, callback) => {
  db.getConnection((err, connection) => {
    connection.query("UPDATE `entrepreneur` SET `validated`="+validated+" WHERE `idUtilisateur`="+id, callback);
    connection.release();
  })
}
