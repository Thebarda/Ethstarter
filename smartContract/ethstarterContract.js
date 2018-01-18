var Web3 = require("web3");
var ethstarterContract = null;
var ethstarter = null;

//minage du contrat. Ceci correspond à l'initialisation du contrat.
module.exports.minerContrat = function(){
    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    ethstarterContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_addrContractor","type":"address"},{"name":"_goal","type":"uint256"},{"name":"_maxGoal","type":"uint256"}],"name":"addCrowfunding","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_estEnCours","type":"bool"}],"name":"setEstEnCours","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContributors","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"nbCrowfundings","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"crowfundings","outputs":[{"name":"addrContractor","type":"address"},{"name":"goal","type":"uint256"},{"name":"maxGoal","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"nbContributors","type":"uint256"},{"name":"estEnCours","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"sendToContractor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_idCrowfundig","type":"uint256"}],"name":"addContributor","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}]);
    ethstarter = ethstarterContract.new(
        {
            from: web3.eth.accounts[0],
            data: '0x6060604052341561000f57600080fd5b6106558061001e6000396000f300606060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630144eb161461008857806367a1a294146100dc5780638b540c371461010a57806391d6d0351461012d5780639f7acff814610156578063eba44945146101e0578063f56c882a14610203575b600080fd5b341561009357600080fd5b6100da600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001909190505061021b565b005b34156100e757600080fd5b6101086004808035906020019091908035151590602001909190505061033b565b005b341561011557600080fd5b61012b6004808035906020019091905050610372565b005b341561013857600080fd5b610140610444565b6040518082815260200191505060405180910390f35b341561016157600080fd5b610177600480803590602001909190505061044a565b604051808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200186815260200185815260200184815260200183815260200182151515158152602001965050505050505060405180910390f35b34156101eb57600080fd5b61020160048080359060200190919050506104b3565b005b610219600480803590602001909190505061053f565b005b60016000815480929190600101919050555060c0604051908101604052808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200160008152602001600081526020016001151581525060008086815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555090505060008060008681526020019081526020016000206003018190555050505050565b60008060008481526020019081526020016000209050818160050160006101000a81548160ff021916908315150217905550505050565b60008060008060008581526020019081526020016000209250600091505b826004015482101561043e5782600601600083815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600101549081150290604051600060405180830381858888f19350505050151561041b57600080fd5b806001015483600301600082825403925050819055508180600101925050610390565b50505050565b60015481565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040154908060050160009054906101000a900460ff16905086565b600080600083815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600301549081150290604051600060405180830381858888f19350505050151561053157600080fd5b600081600301819055505050565b600080600083815260200190815260200160002090508060050160009054906101000a900460ff16156106255760408051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020013481525081600601600083600401600081548092919060010191905055815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101559050503481600301600082825401925050819055505b50505600a165627a7a723058203befefb3d0c4530e0f4afa7daa93ed57fb102069650bd96ed82cd04a9c53bd590029',
            gas: '4700000'
        }, function (e, contract){
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            }
        })
};
//Retourne le nombre de campagnes de financement
module.exports.getNbCrowfundings = function () {
    return ethstarter.nbCrowfundings.call();
};
module.exports.getBalance = function () {
    return ethstarter.balance.call();
};
//Fonction qui ajoute une campagne de financement au contrat. Ne surtout pas oublier de mettre le coût en gas, sinon ça met une erreur.
//A modifier ^^. C'était juste pour tester !
module.exports.addCrowfunding = function(){
    var web3 = new Web3(new Web3.providers.HttpProvider("http://vps409515.ovh.net:8545"));
    return ethstarter.addCrowfunding(1, 10, 12, {from: web3.eth.accounts[0], gas: 3000000});
};