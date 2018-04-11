var db = require('./configDb');

module.exports.getAll = async (recipient) => {
    var query = "SELECT *," +
    "(SELECT CONCAT(prenom, ' ', nom) FROM utilisateur WHERE id = sender) AS sendername " + 
    "FROM dm WHERE recipient = " + recipient;
    return db.asq(query);
}

module.exports.get = async (messID) => {
    var query = "SELECT * FROM dm WHERE idDM = " + messID;
    return db.asq(query);   
}

module.exports.write = async (sender, title, message, timestamp, recipient) => {
    var query = "INSERT INTO dm VALUES (default, " + sender + 
                ", '" + title + "', '" + message + "', " + timestamp + ", " + recipient + ")";
    db.asq(query);
}

module.exports.delete = async (messID) => {
    var query = "DELETE FROM dm WHERE idDM = " + messID;
    db.asq(query);
}