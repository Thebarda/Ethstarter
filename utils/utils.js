module.exports.calculJourRestant = function(dateLimite){
    var dayResteTmp = new Date(dateLimite).getTime() - new Date().getTime();
    return (dayResteTmp / (1000*60*60*24)).toFixed(0);
};