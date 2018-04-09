var Web3 = require("web3");
var ethstarterContract = null;
var ethstarter = null;
var fs = require("fs");

//minage du contrat. Ceci correspond à l'initialisation du contrat.
module.exports.minerContrat = function() {
    var content = fs.readFileSync("./contractAddress.json");
    var jsonContent = JSON.parse(content);

    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    ethstarterContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_addrContractor","type":"address"},{"name":"_goal","type":"uint256"},{"name":"_maxGoal","type":"uint256"}],"name":"addCrowfunding","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idCampagne","type":"uint256"},{"name":"_addrContributor","type":"address"}],"name":"removeContribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_estEnCours","type":"bool"}],"name":"setEstEnCours","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContributors","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nbCrowfundings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"crowfundings","outputs":[{"name":"addrContractor","type":"address"},{"name":"goal","type":"uint256"},{"name":"maxGoal","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"nbContributors","type":"uint256"},{"name":"estEnCours","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContractor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idCrowfundig","type":"uint256"}],"name":"addContributor","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]);
    if(jsonContent.contractAddress==="") {
        ethstarter = ethstarterContract.new(
            {
              from: web3.eth.accounts[0],
               data: '0x6060604052341561000f57600080fd5b61082f8061001e6000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630144eb16146100935780631c98709d146100e757806367a1a294146101295780638b540c371461015757806391d6d0351461017a5780639f7acff8146101a3578063eba449451461022d578063f56c882a14610250575b600080fd5b341561009e57600080fd5b6100e5600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091908035906020019091905050610268565b005b34156100f257600080fd5b610127600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610388565b005b341561013457600080fd5b610155600480803590602001909190803515159060200190919050506104c0565b005b341561016257600080fd5b61017860048080359060200190919050506104f7565b005b341561018557600080fd5b61018d6105c9565b6040518082815260200191505060405180910390f35b34156101ae57600080fd5b6101c460048080359060200190919050506105cf565b604051808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815260200183815260200182151515158152602001965050505050505060405180910390f35b341561023857600080fd5b61024e6004808035906020019091905050610638565b005b6102666004808035906020019091905050610719565b005b60016000815480929190600101919050555060c0604051908101604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200160008152602001600081526020016001151581525060008086815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555090505060008060008681526020019081526020016000206003018190555050505050565b60008060008060008681526020019081526020016000209250600091505b82600401548210156104b95782600601600083815260200190815260200160002090508373ffffffffffffffffffffffffffffffffffffffff168160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156104ac578060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050151561048957600080fd5b806001015483600301819055508260040160008154809291906001900391905055505b81806001019250506103a6565b5050505050565b60008060008481526020019081526020016000209050818160050160006101000a81548160ff021916908315150217905550505050565b60008060008060008581526020019081526020016000209250600091505b82600401548210156105c35782600601600083815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f1935050505015156105a057600080fd5b806001015483600301600082825403925050819055508180600101925050610515565b50505050565b60015481565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16905086565b6000806000808481526020019081526020016000209150668e1bc9bf04000082600301540390503373ffffffffffffffffffffffffffffffffffffffff166108fc668e1bc9bf0400009081150290604051600060405180830381858888f1935050505015156106a657600080fd5b8160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561070a57600080fd5b60008260030181905550505050565b600080600083815260200190815260200160002090508060050160009054906101000a900460ff16156107ff5760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020013481525081600601600083600401600081548092919060010191905055815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050503481600301600082825401925050819055505b50505600a165627a7a7230582031a6651fbe185b72b7bb9214d1aaabdc724c72eac3218aa9842194be7ba811e00029',
               gas: '4700000'
            }, function (e, contract) {
                if (typeof contract.address !== 'undefined') {
                    console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                    jsonContent.contractAddress = contract.address;
                    var contentToWrite = JSON.stringify(jsonContent);
                    fs.writeFileSync("./contractAddress.json", contentToWrite);
                }
            });
    }else{
        ethstarter = ethstarterContract.at(jsonContent.contractAddress);
        console.log("Contract already mined at "+jsonContent.contractAddress);
    }
};
//Retourne le nombre de campagnes de financement
module.exports.getNbCrowfundings = function () {
    return ethstarter.nbCrowfundings.call();
};
module.exports.getBalance = function () {
    return ethstarter.balance.call();
};
//Fonction qui ajoute une campagne de financement au contrat.
//Ne surtout pas oublier de mettre le coût en gas, sinon ça met une erreur.
module.exports.addCrowfunding = function(idCrowfund, addrContractor, goal, montantMax){
    /*var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    if (montantMax && goal && goal > 0 && montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) {
        try {
            return ethstarter.addCrowfunding(idCrowfund, addrContractor, goal, montantMax, {
                from: addrContractor,
                gas: 3000000
            });
        }catch(err){
            throw new Error(err);
        }
    } else {
        throw new Error("(montantMax > goal && web3.isAddress(addrContractor) && idCrowfund) : Cette expression ne passe pas");
    }*/
};

module.exports.addContributorToCrowfund = function(idCrowfund, addrContributor, montant){
    /*var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    var montantWei = web3.toWei(montant, "ether");
    montantWei = parseInt(montantWei);
    if (idCrowfund && web3.isAddress(addrContributor) && montant && montant > 0) {
        try {
            return ethstarter.addContributor(idCrowfund, {from: addrContributor, gas: 3000000, value: montantWei});
        }catch(err){
            throw new Error(err);
        }
    } else {
        throw new Error("(idCrowfund && web3.isAddress(addrContributor) && montant && montant > 0) : Cette expression ne passe pas");
    }*/
};

module.exports.setEstEnCours = function(idCrowfund, estEnCours){
    /*var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    if(idCrowfund && estEnCours !== null && typeof estEnCours !== 'undefined') {
        return ethstarter.setEstEnCours(idCrowfund, estEnCours, {from: web3.eth.accounts[0], gas: 3000000});
    } else {
        throw new Error("(idCrowfund && estEnCours) : Cette expression ne passe pas");
    }*/
};

module.exports.sendToContributors = function(id){
    /*var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    if(id) {
        return ethstarter.sendToContributors(id, {from: web3.eth.accounts[0], gas: 3000000});
    } else {
        throw Error("L'id de la campagne est null ou undefined");
    }
};

module.exports.sendToContractor = function(id){
    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    if(id) {
        return ethstarter.sendToContractor(id, {from: web3.eth.accounts[0], gas: 3000000});
    } else {
        throw Error("L'id de la campagne est null ou undefined");
    }*/
};

module.exports.removeContribution = function(idCampagne, addrContributor) {
    /*var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    if (idCampagne && web3.isAddress(addrContributor)) {
      return ethstarter.removeContribution(idCampagne, addrContributor, {from: addrContributor, gas: 3000000});
    } else {
      throw Error("(idCampagne && web3.isAddress(addrContributor)) : Cette expression ne passe pas");
    }*/
};
