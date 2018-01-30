var db = require('./configDb');

module.exports.getAllCrowfundsThatFinishToday = function(callback){
  db.getConnection(function(err, connection){
    if(err) throw err;
    connection.query("SELECT idCampagne, but, montantActuel FROM campagnes WHERE dateLimite LIKE DATE(NOW())", callback);
    connection.release();
  });
};

module.exports.insertCampaign=function(body, callback){
  db.getConnection(function(err, connection){
      var data = {idEntrepreneur:1,
              nomCampagne:body.titreCampagne,
              but:body.objectif,
              montantActuel:0,
              dateLimite:body.datepicker,
              description:body.presentation,
              estEnCours:true};
    if(err) throw err;
    connection.query("INSERT INTO campagnes SET ?", data, callback);
    connection.release();
  });
};
/*module.exports.getCrowfundById=function(id, callback){
  db.getConnection(function(err, connection){

  });
};*/

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