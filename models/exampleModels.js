var db = require('./configDb.js');

module.exports.getEditions = function (callback) {
  db.getConnection(function (err, connection) {
      if(!err){
          connection.query("SELECT annee FROM editions", callback);
          connection.release();
      }else{
          console.log(err);
      }
  })
};