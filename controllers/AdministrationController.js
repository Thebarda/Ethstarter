var campagnesModel = require("../models/campagnes");
var profilModel = require("../models/profil.js");
var utils = require("../utils/utils");

module.exports.administration = (req, resp) => {
    resp.title = "Administration";
    resp.render("viewAdministration", resp);
};

module.exports.fetchAdmin = (req, resp) => {
  switch(req.params.type) {
      case 'contributeurs':
          profilModel.fetchAllContributors((err, result) => {
              if(err) throw err;
              resp.header=[{n:'Nom'}, {n:'Prénom'}, {n:'Mail'}, {n:'Login'}, {n:'Options'}];
              resp.contributors = result;
              resp.render("viewAdminTab", resp);
          });
          break;
      case 'entrepreneurs':
          profilModel.fetchAllEntrepreneurs((err, result) => {
              if(err) throw err;
              resp.header=[{n:'Nom'}, {n:'Prénom'}, {n:'Mail'}, {n:'Login'}, {n:'Pièce d\'identité'}, {n:'Status'}, {n:'Options'}];
              resp.entrepreneurs = result;
              resp.render("viewAdminTab", resp);
          });
          break;
      case 'campagnes':
        campagnesModel.getAllAllCampaigns((err, result) => {
            if(err) throw err;
            resp.header = [{n: 'Nom'}, {n: 'But'}, {n:'Montant Actuel'}, {n:'Montant maximum'}, {n:'Jours restant'}, {n:'Description courte'}, {n:'est en cours ?'}, {n:'Validation'}, {n:'Options'}];
            result.map((r, idx) => {
               result[idx].dateLimite = utils.calculJourRestant(result[idx].dateLimite);
            });
            resp.campagnes = result;
            resp.render("viewAdminTab", resp);
        });
        break;
  }
};