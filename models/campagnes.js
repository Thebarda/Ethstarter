var db = require('./configDb');

module.exports.getAllCrowfundsThatFinishToday = function(callback){
  db.getConnection(function(err, connection){
    if(err) throw err;
    connection.query("SELECT idCampagne, but, montantActuel FROM campagnes WHERE dateLimite LIKE DATE(NOW())", callback);
    connection.release();
  });
};

module.exports.insertCampaign=function(data, callback){
  db.getConnection(function(err, connection){
    if(err) throw err;
    connection.query("INSERT INTO campagnes SET ?", data, callback);
    connection.release();
  });
};

module.exports.addContributeursXCampagne=function(data, callback){
  db.getConnection(function(err, connection){
    connection.query("INSERT INTO contributeursxcampagne SET ?", data, callback);
    connection.release();
  });
};

module.exports.updateMontant = function(idCampagne, montant, callback){
  db.getConnection(function(err, connection){
    connection.query("UPDATE campagnes SET montantActuel=montantActuel+"+montant+" WHERE idCampagne="+idCampagne, callback);
    connection.release();
  });
};

module.exports.getCampaignById = function(idCampagne, callback){
  db.getConnection(function(err, connection){
    connection.query("SELECT `idEntrepreneur`, `nomCampagne`, " +
        "`but`, `montantActuel`, `dateLimite`, `description`, `estEnCours` " +
        "FROM campagnes WHERE idCampagne="+idCampagne, callback);
    connection.release();
  });
};

module.exports.getAllCampaigns = function(callback){
  db.getConnection(function(err, connection){
    connection.query("SELECT `idEntrepreneur`, `nomCampagne`, " +
        "`but`, `montantActuel`, `dateLimite`, `description`, `estEnCours` " +
        "FROM campagnes", callback);
    connection.release();
  });
};

module.exports.getCampaignsInProgress = function(idCampagne, callback){
  db.getConnection(function(err, connection){
    connection.query("SELECT `idEntrepreneur`, `nomCampagne`, " +
        "`but`, `montantActuel`, `dateLimite`, `description`, `estEnCours` " +
        "FROM campagnes WHERE estEnCours=1", callback);
    connection.release();
  });
};

module.exports.getInfosEntrepreneur = function(idCampagne, callback){
    db.getConnection(function(err, connection){
        connection.query("SELECT nom, prenom, nomEntreprise FROM utilisateur u " +
            "INNER JOIN campagnes c ON u.id = c.idEntrepreneur " +
            "INNER JOIN entrepreneur e ON e.idUtilisateur = u.id " +
            "WHERE c.idCampagne = "+idCampagne, callback);
        connection.release();
    });
};