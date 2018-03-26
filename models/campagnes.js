var db = require('./configDb');

module.exports.getAllCrowfundsThatFinishTodayAndMax = function (callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query("SELECT idCampagne, but, montantActuel, idEntrepreneur, nomCampagne FROM campagnes WHERE dateLimite LIKE DATE(NOW()) OR montantActuel>=montantMax", callback);
        connection.release();
    });
};

module.exports.insertCampaign = function (data, callback) {
    db.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query("INSERT INTO campagnes SET ?", data, callback);
        connection.release();
    });
};

module.exports.addContributeursXCampagne = function (data, callback) {
    db.getConnection(function (err, connection) {
        connection.query("INSERT INTO contributeursxcampagne SET ?", data, callback);
        connection.release();
    });
};

module.exports.updateMontant = function (idCampagne, montant, callback) {
    db.getConnection(function (err, connection) {
        connection.query("UPDATE campagnes SET montantActuel=montantActuel+" + montant + " WHERE idCampagne=" + idCampagne, callback);
        connection.release();
    });
};

module.exports.getMyCampaigns = function (idEntrepreneur, callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT `idCampagne`, `idEntrepreneur`, `nomCampagne`, " +
        "`but`, `montantActuel`, `dateLimite`, `description`, `descriptionCourte`, `image`, `estEnCours` " +
        "FROM campagnes WHERE idEntrepreneur=" + idEntrepreneur, callback);
        connection.release();
    });
};

module.exports.getDonateurs = function (idCampagne, callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT SUM(montant) AS montants, CONCAT(utilisateur.nom, ' ', utilisateur.prenom) " +
            "AS nom FROM participation, utilisateur WHERE idCampagne = "+idCampagne+" AND participation.idContributeur = " +
            "utilisateur.id GROUP BY idContributeur ORDER BY montants DESC", callback);
        connection.release();
    });
};

module.exports.getCampaignById = function (idCampagne, callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT `idCampagne`, `idEntrepreneur`, `nomCampagne`, " +
            "`but`, `montantActuel`, `dateLimite`, `description`, `descriptionCourte`, `estEnCours`, `validated` " +
            "FROM campagnes WHERE idCampagne=" + idCampagne, callback);
        connection.release();
    });
};

module.exports.getAllCampaigns = function (callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT `idCampagne`, `idEntrepreneur`, `nomCampagne`, " +
            "`but`, `montantActuel`, `dateLimite`, `description`, `descriptionCourte`, `image`, `estEnCours` " +
            "FROM campagnes WHERE validated=1", callback);
        connection.release();
    });
};

module.exports.getLast10Campaigns = function (callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT `idCampagne`, `idEntrepreneur`, `nomCampagne`, " +
            "`but`, `montantActuel`, `dateLimite`, `description`, `descriptionCourte`, `image`, `estEnCours` " +
            "FROM campagnes WHERE validated=1 LIMIT 10", callback);
        connection.release();
    });
};

module.exports.getCampaignsInProgress = function (callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT `idCampagne`, `idEntrepreneur`, `nomCampagne`, " +
            "`but`, `montantActuel`, `dateLimite`, `description`, `descriptionCourte`, `image`, `estEnCours` " +
            "FROM campagnes WHERE estEnCours=1 AND validated=1", callback);
        connection.release();
    });
};

module.exports.updateEstEnCoursCampaign = (idCampaign, estEnCours, callback) => {
  db.getConnection((err, connection) => {
    connection.query("UPDATE `campagnes` SET `estEnCours`="+estEnCours+" WHERE `idCampagne`="+idCampaign, callback);
    connection.release();
  })
}

module.exports.getInfosEntrepreneur = function (idCampagne, callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT nom, prenom, nomEntreprise FROM utilisateur u " +
            "INNER JOIN campagnes c ON u.id = c.idEntrepreneur " +
            "INNER JOIN entrepreneur e ON e.idUtilisateur = u.id " +
            "WHERE c.idCampagne = " + idCampagne, callback);
        connection.release();
    });
};

module.exports.fetchNbCampaignsWaitingForValidation = (callback) => {
  db.getConnection(function (err, connection) {
      connection.query("SELECT COUNT(`idCampagne`) AS nbCampaignWaiting " +
          "FROM campagnes WHERE validated=0", callback);
      connection.release();
  });
}

module.exports.fetchCampaignsWaitingForValidation = (callback) => {
  db.getConnection(function (err, connection) {
      connection.query("SELECT `idCampagne`, `idEntrepreneur`, `nomCampagne`, " +
          "`but`, `montantActuel`, `dateLimite`, `description`, `descriptionCourte`, `image`, `estEnCours` " +
          "FROM campagnes WHERE validated=0", callback);
      connection.release();
  });
}

module.exports.updateValidationCampaign = (idCampaign, validationNumber, descriptionValidation, callback) => {
  db.getConnection((err, connection) => {
    connection.query('UPDATE `campagnes` SET `validated`='+validationNumber+', `descriptionValidation`="'+descriptionValidation+'" WHERE `idCampagne`='+idCampaign, callback);
    connection.release();
  })
};

module.exports.getAllAllCampaigns = function (callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT `idCampagne`, `nomCampagne`, " +
            "`but`, `montantActuel`, montantMax, `dateLimite`, `descriptionCourte`, `estEnCours`, validated " +
            "FROM campagnes", callback);
        connection.release();
    });
};

/* //Legacy search function
module.exports.searchAnyCampaign = (search, callback) => {
    db.getConnection((err, connection) => {
        connection.query("SELECT `idCampagne`, `nomCampagne`, " +
        "`but`, `montantActuel`, montantMax, `dateLimite`, `descriptionCourte`, `estEnCours`, validated " +
        "FROM campagnes  WHERE validated=1 AND `nomCampagne` LIKE '%" + search + 
        "%' OR `descriptionCourte` LIKE  '%" + search + "%'", callback);
        connection.release();
    })
}
 */

module.exports.searchAnyCampaign = async (search) => {
    var query = "SELECT `idCampagne`, `nomCampagne`, " +
    "`but`, `montantActuel`, montantMax, `dateLimite`, `descriptionCourte`, `estEnCours`, validated " +
    "FROM campagnes  WHERE validated=1 AND `nomCampagne` LIKE '%" + search + 
    "%' OR `descriptionCourte` LIKE  '%" + search + "%'";

    return db.asq(query);
}


module.exports.favorites = function (idUtilisateur, callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT campagnes.idCampagne, `nomCampagne`, " + 
        "`but`, `montantActuel`, montantMax, `dateLimite`, `descriptionCourte`, `estEnCours`, validated " + 
        "FROM campagnes inner join favoris on campagnes.idCampagne=favoris.idCampagne WHERE favoris.idUtilisateur =" + idUtilisateur, callback);
        connection.release();
    });
}; 


module.exports.contributed = function (idUtilisateur, callback) {
    db.getConnection(function (err, connection) {
        connection.query("SELECT campagnes.idCampagne, `nomCampagne`, " + 
        "`but`, `montantActuel`, montantMax, `dateLimite`, `descriptionCourte`, `estEnCours`, validated " + 
        "FROM campagnes inner join contributeursxcampagne on campagnes.idCampagne=contributeursxcampagne.idCampagne WHERE contributeursxcampagne.idContributeur =" + idUtilisateur, callback);
        connection.release();
    });
}; 

module.exports.addFavorite = (idUser, idCamp, callback) => {
    db.getConnection((err, co) => {
        co.query("INSERT INTO favoris VALUES ('" + idUser + "', '" + idCamp + "')");
        co.release();
    });
};

module.exports.remFavorite = (idUser, idCamp, callback) => {
    db.getConnection((err, co) => {
        co.query("DELETE FROM favoris WHERE idCampagne = " + idCamp + " AND idUtilisateur = " + idUser);
        co.release();
    });
};

module.exports.isFavorite = (idUser, idCamp, callback) => {
    console.log("mdl : " + idCamp);
    db.getConnection((e, c) => {
        c.query("SELECT idCampagne FROM favoris WHERE idCampagne = " + idCamp + " AND idUtilisateur = " + idUser, callback);
        c.release();
    });
};

module.exports.hasContributed = (idUser, idCamp, callback) => {
    console.log("md2 : " + idCamp);
    db.getConnection((e, c) => {
        c.query("SELECT idCampagne FROM contributeursxcampagne WHERE idCampagne = " + idCamp + " AND idContributeur = " + idUser, callback);
        c.release();
    });
};

module.exports.addComm = (idUser,idCamp,commentaires,callback) => {
    db.getConnection((err, co ) => {
        co.query("INSERT INTO commentaires VALUES ('" + idUser + "', '" + idCamp + "','" + commentaires + "')", callback);
        co.release();
    });
};

module.exports.getComm = (idCamp,callback) => {
    console.log("idCampagne :" + idCamp);
    db.getConnection((e, c) => {
        c.query("select commentaire as comm,prenom,nom from utilisateur inner join commentaires on utilisateur.id = commentaires.idContributeur where commentaires.idCampagne =" + idCamp , callback);
        c.release();
    });
}


////promise test ////
var testq = "SELECT nom FROM utilisateur WHERE id=51";

const promiseTest = async () => {
    var res = await db.asq(testq);
    console.log("my favorite user is " + res[0].nom);
}
promiseTest();
