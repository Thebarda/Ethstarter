var Web3 = require("web3");
var campagneModel = require("../models/campagnes");
var notifModel = require('../models/notifications');
var fs = require("fs");

module.exports.checkCrowfunds = function(){
    var logObject = {
        starting: "Start checking campaigns that finish today...",
        ending: "Stopping checking campaigns that finish today...",
        checks: []
    };
    var content = fs.readFileSync("./contractAddress.json");
    var jsonContent = JSON.parse(content);
    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:42669"));
    var ethstarterContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_addrContractor","type":"address"},{"name":"_goal","type":"uint256"},{"name":"_maxGoal","type":"uint256"}],"name":"addCrowfunding","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idCampagne","type":"uint256"},{"name":"_addrContributor","type":"address"}],"name":"removeContribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_estEnCours","type":"bool"}],"name":"setEstEnCours","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContributors","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nbCrowfundings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"crowfundings","outputs":[{"name":"addrContractor","type":"address"},{"name":"goal","type":"uint256"},{"name":"maxGoal","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"nbContributors","type":"uint256"},{"name":"estEnCours","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContractor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idCrowfundig","type":"uint256"}],"name":"addContributor","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]);
    var ethstarter = ethstarterContract.at(jsonContent.contractAddress);
    campagneModel.getAllCrowfundsThatFinishTodayAndMax(function(err, result){
        if(err)
        {
            logObject.error = err;
            throw err;
        }
       for(var i=0;i<result.length;i++){
           var campaignCheck = {startCheckingCampaign: "Starting for campaign "+result[i].idCampagne};
           if(result[i].montantActuel >= result[i].but){
               ethstarter.sendToContributors(result[i].idCampagne);
               notifModel.addNotification(result[i].idEntrepreneur, "Votre campagne "+result[i].nomCampagne+" a échoué", (err, res) => {});
               campaignCheck.status = "Sended to contributors";
           }else{
               ethstarter.sendToContractor(result[i].idCampagne);
               notifModel.addNotification(result[i].idEntrepreneur, "Votre campagne "+result[i].nomCampagne+" a réussi. Vous allez être crédité de "+result[i].montantActuel+". Bonne chance", (err, res) => {});
               campaignCheck.status = "Sended to contrator";
           }
           ethstarter.setEstEnCours(result[i].idCampagne, false);
           campagneModel.updateEstEnCoursCampaign(result[i].idCampagne, false);
           campaignCheck.endCheckCampaign = "Ending for campaign "+result[i].idCampagne;
           logObject.checks.push(campaignCheck);
       }
       var logString = JSON.stringify(logObject);
       if(!fs.existsSync("./smartContract/logs/")){
           fs.mkdirSync("./smartContract/logs/");
       }
       var logWriteStream =  fs.createWriteStream("./smartContract/logs/checkCampaings_"+new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDate()+".log.json");
       logWriteStream.write(logString);
       logWriteStream.end();
    });
};
