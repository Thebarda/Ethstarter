const Sequelize = require('sequelize');
const sequelize = new Sequelize('ethstarterDB', 'ethstarter_admin', 'ethstarter_admin8587',{
    host: 'vps409515.ovh.net',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 60000
    },
    dialectOptions: {
        socketPath: "/var/run/mysqld/mysqld.sock"
    },
    define: {
        paranoid: true
    }
});

exports.sequelize = sequelize;

module.exports.testConnection = function() {
    sequelize.authenticate().then(function(){
        console.log('Connection has been established successfully.');
    }).catch(function(err){
        console.error('Unable to connect to the database:', err);
    });
};