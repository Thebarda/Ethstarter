var Web3 = require("web3");
var ethstarterContract = null;
var ethstarter = null;
var fs = require("fs");

//minage du contrat. Ceci correspond à l'initialisation du contrat.
module.exports.minerContrat = function() {
    var content = fs.readFileSync("./contractAddress.json");
    var jsonContent = JSON.parse(content);

    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    ethstarterContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_addrContractor","type":"address"},{"name":"_goal","type":"uint256"},{"name":"_maxGoal","type":"uint256"}],"name":"addCrowfunding","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_estEnCours","type":"bool"}],"name":"setEstEnCours","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContributors","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nbCrowfundings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"crowfundings","outputs":[{"name":"addrContractor","type":"address"},{"name":"goal","type":"uint256"},{"name":"maxGoal","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"nbContributors","type":"uint256"},{"name":"estEnCours","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContractor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idCrowfundig","type":"uint256"}],"name":"addContributor","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]);
    if(jsonContent.contractAddress==="") {
        ethstarter = ethstarterContract.new(
            {
                from: web3.eth.accounts[0],
                data: '0x6060604052341561000f57600080fd5b61064a8061001e6000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630144eb161461008857806367a1a294146100d15780638b540c37146100ff57806391d6d035146101225780639f7acff81461014b578063eba44945146101d5578063f56c882a146101f8575b600080fd5b6100cf600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091908035906020019091905050610210565b005b34156100dc57600080fd5b6100fd60048080359060200190919080351515906020019091905050610330565b005b341561010a57600080fd5b6101206004808035906020019091905050610367565b005b341561012d57600080fd5b610135610439565b6040518082815260200191505060405180910390f35b341561015657600080fd5b61016c600480803590602001909190505061043f565b604051808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815260200183815260200182151515158152602001965050505050505060405180910390f35b34156101e057600080fd5b6101f660048080359060200190919050506104a8565b005b61020e6004808035906020019091905050610534565b005b60016000815480929190600101919050555060c0604051908101604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200160008152602001600081526020016001151581525060008086815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555090505060008060008681526020019081526020016000206003018190555050505050565b60008060008481526020019081526020016000209050818160050160006101000a81548160ff021916908315150217905550505050565b60008060008060008581526020019081526020016000209250600091505b82600401548210156104335782600601600083815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050151561041057600080fd5b806001015483600301600082825403925050819055508180600101925050610385565b50505050565b60015481565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16905086565b600080600083815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600301549081150290604051600060405180830381858888f19350505050151561052657600080fd5b600081600301819055505050565b600080600083815260200190815260200160002090508060050160009054906101000a900460ff161561061a5760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020013481525081600601600083600401600081548092919060010191905055815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050503481600301600082825401925050819055505b50505600a165627a7a723058207f907539d5e9f4bc74cfeb2e16752af24c927a85c64e7276f7c206b1c275ba400029',
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
module.exports.addCrowfunding = function(idCrowfund, addrContractor, goal){
    //var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
   return ethstarter.addCrowfunding(idCrowfund, addrContractor, goal, 0, {from: addrContractor, gas: 3000000});
};

module.exports.addContributorToCrowfund = function(idCrowfund, addrContributor, montant){
    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    var montantWei = web3.toWei(montant, "ether");
    montantWei = parseInt(montantWei);
  return ethstarter.addContributor(idCrowfund, {from:addrContributor, gas:3000000, value:montantWei});
};

module.exports.setEstEnCours = function(idCrowfund, estEnCours){
  return ethstarter.setEstEnCours(idCrowfund, estEnCours);
};

module.exports.sendToContributors = function(id){
    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    return ethstarter.sendToContributors(id, {from: web3.eth.accounts[0], gas: 3000000});
};

module.exports.sendToContractor = function(id){
    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    return ethstarter.sendToContractor(id, {from: web3.eth.accounts[0], gas: 3000000});
};