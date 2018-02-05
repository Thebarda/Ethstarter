
var db = require('./configDb.js');

module.exports.getEditions = function (callback) {
  db.getConnection(function (err, connection) {
      if(!err){
          connection.query("SELECT test FROM test", callback);
          connection.release();
      }else{
          console.log(err);
      }
  })

};