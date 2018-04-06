var db = require('./configDb.js');
var sha256 = require('js-sha256').sha256;

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
        connection.query("SELECT nom, prenom, mail, login, password, addrPubliqueEth, nomEntreprise FROM utilisateur u INNER JOIN entrepreneur e on u.id=e.idUtilisateur WHERE id=" + idCompte, callback);
        connection.release();
    });
};

module.exports.updateProfil = function(idCompte, body, callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        var sql = "UPDATE utilisateur set nom=?, prenom=?, mail=?, addrPubliqueEth=?  WHERE id=?;";
        connection.query(sql, [body.lastname, body.firstname, body.email, body.address, idCompte], callback);
        connection.release();
    });
};

module.exports.updatePassword = function(idCompte, body, callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        var sql = "UPDATE utilisateur set password=?  WHERE id=?;";
        connection.query(sql, [sha256(body.newPassword), idCompte], callback);
        connection.release();
    });
};

module.exports.updateProfilEntrepreneur = function(idCompte, body, callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        var sql = "UPDATE entrepreneur SET nomEntreprise=? WHERE idUtilisateur=?;";
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

module.exports.getMailContractorByCampaign = (idCampaign, callback) => {
  db.getConnection((err, connection) => {
     connection.query("SELECT mail FROM utilisateur u INNER JOIN campagnes c ON c.idEntrepreneur=u.id WHERE c.idCampagne="+idCampaign, callback);
     connection.release();
  });
};

module.exports.getUsers = () => {
    return db.asq("SELECT CONCAT(prenom, ' ', nom) AS name, id FROM utilisateur WHERE NOT type = 0");
}