var db = require('./configDbTest');

module.exports.getAllCrowfundsThatFinishToday = function(callback){
  db.getConnection(function(err, connection){
    if(err) throw err;
    connection.query("SELECT idCampagne, but, montantActuel FROM campagnes WHERE dateLimite LIKE DATE(NOW())", callback);
    connection.release();
  });
};