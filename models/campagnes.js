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

module.exports.getCrowfundById=function(id, callback){
  db.getConnection(function(err, connection){

  });
};