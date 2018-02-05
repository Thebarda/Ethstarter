var db = require('../../models/configDb.js');

module.exports.getProfile = function(idCompte, callback){
  db.getConnection(function(err, connection){
    if(err) throw err;
    connection.query("SELECT nom, prenom, mail, login, addrPubliqueEth, type FROM utilisateur WHERE id="+idCompte, callback);
    connection.release();
  });
};
