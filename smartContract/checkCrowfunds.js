var campagneModel = require("../models/campagnes");
var fs = require("fs");

module.exports.checkCrowfunds = function(){
    console.log("starting check campaigns that finish today...");
    var content = fs.readFileSync("./contractAddress.json");
    var jsonContent = JSON.parse(content);
    var ethstarterContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_addrContractor","type":"address"},{"name":"_goal","type":"uint256"},{"name":"_maxGoal","type":"uint256"}],"name":"addCrowfunding","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_estEnCours","type":"bool"}],"name":"setEstEnCours","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContributors","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nbCrowfundings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"crowfundings","outputs":[{"name":"addrContractor","type":"address"},{"name":"goal","type":"uint256"},{"name":"maxGoal","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"nbContributors","type":"uint256"},{"name":"estEnCours","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContractor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idCrowfundig","type":"uint256"}],"name":"addContributor","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]);
    var ethstarter = ethstarterContract.at(jsonContent.contractAddress);
    console.log("operating check campaigns that finish today...");
    campagneModel.getAllCrowfundsThatFinishToday(function(err, result){
       for(var i=0;i<result.length;i++){
           if(result[i].montantActuel >= result[i].but){
               ethstarter.sendToContributors(result[i].idCampagne);
           }else{
               ethstarter.sendToContractor(result[i].idCampagne);
           }
           ethstarter.setEstEnCours(result[i].idCampagne, false);
       }
       console.log("stoping check campaigns that finish today...");
    });
}