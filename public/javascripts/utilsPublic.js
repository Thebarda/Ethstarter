module.exports.checkMontantContribution = function(montant){
    if(typeof montant === "number" && montant > 0){
        return true;
    }else{
        return false;
    }
};