var db = require('./configDb');

module.exports.getAll = async (userID) => {
    var query = "SELECT * FROM `dm` WHERE idUtilisateur = " + userID;
    return db.asq(query);
}

module.exports.get = async (messID) => {
    var query = "SELECT * FROM `dm` WHERE idDM = " + messID;
    return db.asq(query);   
}
