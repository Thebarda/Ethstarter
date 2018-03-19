var db = require('./configDb.js');

module.exports.getProfilContributeur = function(idCompte, callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query("SELECT nom, prenom, mail, login, password, addrPubliqueEth FROM utilisateur WHERE id=" + idCompte, callback);
        connection.release();
    });
};

module.exports.getProfilEntrepreneur = function(idCompte, callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query("SELECT nom, prenom, mail, login, password, addrPubliqueEth, `nomEntreprise` FROM utilisateur u INNER JOIN entrepreneur e on u.id=e.idUtilisateur WHERE id=" + idCompte, callback);
        connection.release();
    });
};

module.exports.updateProfil = function(idCompte, body, callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        var sql = "UPDATE INTO utilisateur set nom=?, prenom=?, mail=?, password=?, addrPubliqueEth=?  WHERE id=?;";
        connection.query(sql, [body.lastname, body.firstname, body.email, body.mdp, body.address, idCompte], callback);
        connection.release();
    });
};

module.exports.getParticipations = function(idCompte, callback){
    db.getConnection(function(err, connection){
      if (err) throw err;
      var sql = "SELECT nomCampagne, SUM(montant) AS montantTot FROM participation, campagnes"; 
      sql += " WHERE participation.idCampagne = campagnes.idCampagne"; 
      sql += " AND participation.idContributeur="+idCompte+" GROUP BY nomCampagne";
      connection.query(sql, callback);
      connection.release();
    });
};
      
module.exports.delParticipation = function(nomCampagne, idContributeur, callback){
    db.getConnection(function(err, connection){
        if (err) throw err;
        var sql = "DELETE FROM participation";
        sql += " WHERE idContributeur ="+idContributeur;
        sql += " AND idCampagne IN (SELECT idCampagne FROM campagnes WHERE nomCampagne="+nomCampagne+")";
        connection.query(sql, callback);
        connection.release();
    });
};

module.exports.updateProfilEntrepreneur = function(idCompte, body, callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        var sql = "UPDATE INTO entrepreneur SET nomEntreprise=? WHERE idUtilisateur=?;";
        connection.query(sql, [body.nomEntreprise, idCompte], callback);
    });
};

module.exports.fetchNbContractorsWaitingForValidation = function(callback) {
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
};

module.exports.updateValidationContractorAccount = (id, validated, callback) => {
  db.getConnection((err, connection) => {
    connection.query("UPDATE `entrepreneur` SET `validated`="+validated+" WHERE `idUtilisateur`="+id, callback);
    connection.release();
  });
};

module.exports.fetchAllContributors = (callback) => {
    db.getConnection((err, connection) => {
       connection.query("SELECT id, nom, prenom, mail, login FROM utilisateur WHERE type=1", callback);
       connection.release();
    });
};

module.exports.fetchAllEntrepreneurs = (callback) => {
    db.getConnection((err, connection) => {
        connection.query("SELECT id, nom, prenom, mail, login, validated, pieceIdentide FROM utilisateur u INNER JOIN entrepreneur e ON e.idUtilisateur=u.id", callback);
        connection.release();
    });
};

module.exports.fetchValidationEntrepeneur = (idEntrepreneur, callback) => {
  db.getConnection((err, connexion) => {
      connexion.query("SELECT validated FROM entrepreneur WHERE idUtilisateur="+idEntrepreneur, callback);
      connexion.release();
  });
};

module.exports.deleteUser = (idUtilisateur, callback) => {
  db.getConnection((err, connection) => {
    connection.query("DELETE FROM utilisateur WHERE id="+idUtilisateur, callback);
    connection.release();
  });
};
module.exports.deleteContractor = (idContractor, callback) => {
    db.getConnection((err, connection) => {
        connection.query("DELETE FROM entrepreneur WHERE idUtilisateur="+idContractor, callback);
        connection.release();
    });
};
