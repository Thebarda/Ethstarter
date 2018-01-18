const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'vps409515.ovh.net',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports.testConnection = sequelize.authenticate().then(function(){
    console.log('Connection has been established successfully.');
}).catch(function(err){
    console.error('Unable to connect to the database:', err);
});