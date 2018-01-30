var db = require("./configDb");

module.exports.addParticipation = function(data, callback){
  db.getConnection(function(err, connection){
     if(err) throw err;
     connection.query("INSERT INTO participation SET ?", data, callback);
     connection.release();
  });
};

module.exports.getContributeurs = function(idCampaign, callback){
  db.getConnection(function(err, connection){
      connection.query("SELECT DISTINCT nom, prenom FROM participation p \n" +
          "INNER JOIN utilisateur u ON u.id = p.idContributeur\n" +
          "INNER JOIN contributeursxcampagne c on c.idContributeur = p.idContributeur\n" +
          "WHERE c.idCampagne = "+idCampaign, callback);
      connection.release();
  });
};

module.exports.getNbContributions = function(idCampaign, callback){
    db.getConnection(function(err, connection){
        connection.query("SELECT COUNT(idContributeur) as nbContributeurs FROM contributeursxcampagne "+
        "WHERE idCampagne = "+idCampaign, callback);
        connection.release();
    });
};