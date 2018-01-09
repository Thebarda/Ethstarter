var mysql = require('mysql');

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: '',
    password: '',
    database: '',
    port: '3306'
});

module.exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};
