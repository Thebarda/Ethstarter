const Sequelize = require('sequelize');
const sequelize = new Sequelize('ethstarterDB', 'ethremotedb', 'leblancpresident2020',{
    host: 'vps409515.ovh.net',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 60000
    },
    define: {
        timestamps: false
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
