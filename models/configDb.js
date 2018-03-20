
var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'vps409515.ovh.net',
    user: 'ethremotedb',
    password: 'leblancpresident2020',
    database: 'ethstarterDB',
    port: '3306'
});

module.exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};
//com

    //////////////////////
    // ASYNC CODE BELOW //
    //////////////////////

var p = require('promise-mysql').createPool({
    host: 'vps409515.ovh.net',
    user: 'ethremotedb',
    password: 'leblancpresident2020',
    database: 'ethstarterDB',
    port: '3306'
});

p.getConnection().then(function(connection) {
    connection.query('select `name` from hobbits').then()
}).catch(function(err) {
    done(err);
});

