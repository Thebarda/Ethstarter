var db = require("./configDb");

module.exports.addParticipation = function(data, callback){
  db.getConnection(function(err, connection){
     if(err) throw err;
     connection.query("INSERT INTO participation SET ?", data, callback);
     connection.release();
  });
};