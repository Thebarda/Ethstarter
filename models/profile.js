var db = require('./configDb.js');

module.exports.getProfile = function(id, callback){
  db.getConnection(function(err, connection){
    if(err) throw err;
    connection.query("SELECT nom, prenom, mail, login, addrPubliqueEth, type  FROM utilisateur WHERE id=1", callback);
    connection.release();
  });
};
