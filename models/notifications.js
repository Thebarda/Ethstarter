var db = require('./configDb.js');

module.exports.addNotification = (idUtilisateur, text, callback) => {
    db.getConnection((err, connection) => {
       if(err) throw err;
       var sql = 'INSERT INTO `notifications` (`idUtilisateur`, `text`, `date`, `viewed`) VALUES ('+idUtilisateur+', "'+text+'", NOW(), 0)';
       connection.query(sql, callback);
       connection.release();
    });
};

module.exports.fetchNotifications = (idUtilisateur, callback) => {
    db.getConnection((err, connection) => {
        if(err) throw err;
        connection.query("SELECT idNotification, text, date, viewed FROM notifications WHERE idUtilisateur="+idUtilisateur+" ORDER BY idNotification DESC", callback);
        connection.release();
    });
};

module.exports.getAll = async (idUtilisateur) => {
    var query = "SELECT idNotification, text, date, viewed " +
        "FROM notifications WHERE idUtilisateur=" + idUtilisateur + " ORDER BY idNotification DESC";
        return db.asq(query);
}

module.exports.fetchNbNotifications = (idUtilisateur, callback) => {
    db.getConnection((err, connection) => {
        if(err) throw err;
        connection.query("SELECT COUNT(idNotification) AS nbNotifications FROM notifications WHERE idUtilisateur="+idUtilisateur, callback);
        connection.release();
    });
};

module.exports.updateViewNotification = (idNotification, viewed, callback) => {
    db.getConnection((err, connection) => {
        if(err) throw err;
        connection.query("UPDATE notifications SET viewed="+viewed+" WHERE idNotification="+idNotification, callback);
        connection.release();
    });
};

module.exports.fetchNotificationsForSevenDays = (idUtilisateur, callback) => {
    db.getConnection((err, connection) => {
        if(err) throw err;
        connection.query("SELECT idNotification, text, date, viewed FROM notifications WHERE idUtilisateur="+idUtilisateur+" AND date > DATE_SUB(NOW(), INTERVAL 7 DAY) ORDER BY idNotification DESC", callback);
        connection.release();
    });
};