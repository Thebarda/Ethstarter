var profilModel = require('../models/profil');
var sendmail = require('sendmail')({silent: true});

module.exports.sendMail = (req, res)=>{
    let body = '';
    for(let i=0;i<req.query.bodyMail.length;i++){
       body += req.query.bodyMail[i].replace('\n', '<br/>');
    }
    profilModel.getProfilContributeur(req.session.idCompte, (err, result) => {
       if(err) throw err;
       let mailExp = result[0].mail;
        profilModel.getMailContractorByCampaign(req.session.isLookingCampaign, (err, result) => {
           if(err) throw err;
           let mailDest = result[0].mail;
            sendmail({
                from: mailExp,
                to: mailDest,
                subject: req.query.subject,
                html: body
            }, function (err, reply) {
                res.json(err);
            });
        });
    });
};