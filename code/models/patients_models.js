// Appel de la BDD
const connexion = require('./connexion_bdd');

// Fonction de lecture des données des patient
const readPatient = (req, res) => {
    connexion.module_connexion.query("SELECT * FROM patients",  (err, result, fields) => {
        if (!err) {
            if (result.length > 0) {
                res.render('liste_patients', {patient: result});
            } else {
                res.redirect('/patients/insertion_patient');
            }
        } else {
            console.log(err);
            res.redirect('/patients/insertion_patient');
        }
    });
}

// Fonction de lecture des données d'un patient
const readUnPatient = (req, res, idPatient) => {
    connexion.module_connexion.query("SELECT * FROM patients WHERE id =", [parseInt(idPatient)] , (err, lignes, champs) =>{
        if (!err) {
            if (lignes.length > 0) {
                res.render('recherche_patient', {infos: lignes});
            } else {
                console.log(err);
                res.redirect('/patients/erreur_recherche_patient');
            }
        } else {
            console.log(err);
            res.redirect('/patients/erreur_recherche_patient');
        }
    });
}


// Fonction d'ajout d'un patient
const insertPatient = (req, res) => {
    let nom = req.query.nom;
    let prenom = req.query.prenom;
    let telephone = req.query.telephone;
    let mail = req.query.mail;
    let date_naiss = req.query.date_naiss;
    let securite_sociale = req.query.securite_sociale;
    let mutuelle = req.query.mutuelle;
    if (telephone === undefined && mail === undefined && date_naiss === undefined && securite_sociale === undefined && mutuelle === undefined) {
        res.redirect('/patients/erreur_recherche_patient');
    } else {
        if (nom === undefined && prenom === undefined) {
            nom = null;
            prenom = null;
        }
        console.log(nom, prenom);
        connexion.module_connexion.query("INSERT INTO patients (nom, prenom, telephone, mail, date_naiss, securite_sociale, mutuelle) VALUES (?,?,?,?,?,?,?)",
            [nom, prenom, telephone, mail, new Date(date_naiss), securite_sociale, mutuelle] , (err, lignes, champs) =>{
            if (!err) {
                    res.redirect('/patients');
            } else {
                console.log(err);
                res.redirect('/patients/erreur_recherche_patient');
            }
        });
    }
}

// Fonction d'affichage du patient à modifier'
const modification_patient_page = (req, res, id) => {
    connexion.module_connexion.query("SELECT * FROM patients WHERE id = ? ", [parseInt(id)] , (err, lignes, champs) =>{
        if (!err) {
            if (lignes.length > 0) {
                console.log(lignes)
                res.render('modification_patient', {patient: lignes});
            } else {
                res.redirect('/patients/');
            }
        } else {
            console.log(err);
            res.redirect('/patients/erreur_recherche_patient');
        }
    });
}

// Fonction de modification d'un patient sélectionné
const update_patient = (req, res, id) => {
    let nom = req.query.nom;
    let prenom = req.query.prenom;
    let telephone = req.query.telephone;
    let mail = req.query.mail;
    let date_naiss = req.query.date_naiss;
    let securite_sociale = req.query.securite_sociale;
    let mutuelle = req.query.mutuelle;

    connexion.module_connexion.query("UPDATE patients SET nom = ?, prenom = ?, " +
        "telephone = ?, mail = ?, date_naiss = ?, securite_sociale = ?, mutuelle = ? " +
        "WHERE id = ? ", [nom, prenom, telephone, mail, new Date(date_naiss), securite_sociale, mutuelle] , (err, results) =>{
        if (!err) {
            res.redirect('/patients/recherche_patient?idPatient=' + id);
        } else {
            console.log(err);
            res.redirect('/patients/erreur_recherche_patient');
        }
    });
}


// Exportation des opérations CRUD
module.exports = {
    readPatient,
    readUnPatient,
    insertPatient,
    modification_patient_page,
    update_patient
}