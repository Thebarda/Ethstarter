var db = require('./configDb');

module.exports.getAll = async (userID) => {
    var query = "SELECT * FROM dm WHERE idUtilisateur = " + userID;
    return db.asq(query);
}

module.exports.get = async (messID) => {
    var query = "SELECT * FROM dm WHERE idDM = " + messID;
    return db.asq(query);   
}

module.exports.write = async (userID, title, message, timestamp) => {
    var query = "INSERT INTO dm VALUES (default," + userID + 
                "," + title + "," + message + "," + timestamp + ")";
    db.asq(query);
}

module.exports.delete = async (messID) => {
    var query = "DELETE FROM dm WHERE idDM = " + messID;
    db.asq(query);
}