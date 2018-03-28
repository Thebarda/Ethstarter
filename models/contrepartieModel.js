var db = require('./configDb.js');

module.exports.addContrepartie = (montant, descriptionCP, idCampagne, callback) => {
  db.getConnection((err, connection) => {
     if(err) throw err;
     connection.query("INSERT INTO contrepartiesCampagne (idCampagne, descriptionCP, montant) VALUES ("+idCampagne+", '"+descriptionCP+"', "+montant+")", callback);
     connection.release();
  });
};