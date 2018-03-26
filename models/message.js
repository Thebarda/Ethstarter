var db = require('./configDb');

module.exports.getAll = async (recipient) => {
    var query = "SELECT * FROM dm WHERE idUtilisateur = " + recipient;
    return db.asq(query);
}

module.exports.get = async (messID) => {
    var query = "SELECT * FROM dm WHERE idDM = " + messID;
    return db.asq(query);   
}

module.exports.write = async (sender, title, message, timestamp, recipient) => {
    var query = "INSERT INTO dm VALUES (default," + userID + 
                "," + title + "," + message + "," + timestamp + "," + recipient + ")";
    db.asq(query);
}

module.exports.delete = async (messID) => {
    var query = "DELETE FROM dm WHERE idDM = " + messID;
    db.asq(query);
}