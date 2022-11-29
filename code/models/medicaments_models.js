const connexion = require('./connexion_bdd');


const readMedicament = (req, res) => {
    connexion.module_connexion.query("SELECT * FROM medicaments", (err, result, fields) => {
        if (!err) {
            if (result.length > 0) {
                res.render('liste_medicaments', {medicament: result});
            } else {
                res.redirect('/medicaments/insertion_medicament');
            }
        } else {
            console.log(err);
            res.redirect('/medicaments/insertion_medicament');
        }
    });
}

const readUnMedicament = (req, res, idMedicament) => {
    connexion.module_connexion.query("SELECT * FROM medicaments WHERE id = ? ", [parseInt(idMedicament)] , (err, lignes, champs) =>{
        if (!err) {
            if (lignes.length > 0) {
                res.render('recherche_medicament', {infos: lignes});
            } else {
                console.log(err);
                res.redirect('/medicaments/erreur_recherche_medicament');
            }
        } else {
            console.log(err);
            res.redirect('/medicaments/erreur_recherche_medicament');
        }
    });
}

const insertMedicament = (req, res) => {
    let nom = req.query.nom;
    let dosage = req.query.dosage;
    let frequences = req.query.frequences;
    let types = req.query.types;
    let stocks = req.query.stocks;
    let seuil_alerte = req.query.seuil_alerte;
    let fournisseur = req.query.fournisseur;
    if (nom === undefined && frequences === undefined && types === undefined && stocks === undefined && seuil_alerte === undefined && fournisseur === undefined) {
        res.redirect('/medicaments/erreur_recherche_medicament');
    } else {
        if (dosage === undefined) {
            dosage = null;
        }
        console.log(nom);
        connexion.module_connexion.query("INSERT INTO medicaments " +
            "(nom, dosage, frequences, type, stocks, seuil_alerte, fournisseur) " +
            "VALUES (?,?,?,?,?,?,?)",
            [nom, dosage,frequences,types,parseInt(stocks),parseInt(seuil_alerte),fournisseur] , (err, lignes, champs) =>{
            if (!err) {
                    res.redirect('/medicaments/');
            } else {
                console.log(err);
                res.redirect('/medicaments/erreur_recherche_medicament');
            }
        });
    }
}

const modification_medicament_page = (req, res, id) => {
    connexion.module_connexion.query("SELECT * FROM medicaments WHERE id = ? ", [parseInt(id)] , (err, lignes, champs) =>{
        if (!err) {
            if (lignes.length > 0) {
                console.log(lignes)
                res.render('modification_medicament', {medicament: lignes});
            } else {
                res.redirect('/medicaments/');
            }
        } else {
            console.log(err);
            res.redirect('/medicaments/erreur_recherche_medicament');
        }
    });
}

const update_medicament = (req, res, id) => {
    let nom = req.query.nom;
    let dosage = req.query.dosage;
    let frequences = req.query.frequences;
    let types = req.query.types;
    let stocks = req.query.stocks;
    let seuil_alerte = req.query.seuil_alerte;
    let fournisseur = req.query.fournisseur;

    connexion.module_connexion.query("UPDATE medicaments SET nom = ?, dosage = ?, " +
        "frequences = ?, type = ?, stocks = ?, seuil_alerte = ?, fournisseur = ? " +
        "WHERE id = ? ", [nom, dosage, frequences, types, parseInt(stocks), parseInt(seuil_alerte), fournisseur, parseInt(id)] , (err, results) =>{
        if (!err) {
            res.redirect('/medicaments/recherche_medicament?idMedicament=' + id);
        } else {
            console.log(err);
            res.redirect('/medicaments/erreur_recherche_medicament');
        }
    });
}

module.exports = {
    readMedicament,
    readUnMedicament,
    insertMedicament,
    modification_medicament_page,
    update_medicament
}