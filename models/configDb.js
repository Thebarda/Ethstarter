var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'vps409515.ovh.net',
    user: 'ethremotedb',
    password: 'leblancpresident2020',
    database: 'ethstarterDB',
    port: '3306'
});

module.exports.getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        callback(err, connection);
    });
};
