const contrepartiesModel = require('../models/contrepartieModel');
const util = require('../utils/utils');

module.exports.addContrepartie = (req, resp) => {
    const { montant, idCampagne, descriptionCP } = req.body;
    if(montant && descriptionCP && idCampagne) {
        contrepartiesModel.addContrepartie(montant, util.escapeSingleQuotes(descriptionCP), idCampagne, (err, result) => {
           if(err) throw err;
            resp.render("emptyView", resp);
        });
    }
};