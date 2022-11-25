const medicament_model = require('../models/medicaments_models');

const medicaments_tous = (req, res) => {
    medicament_model.readMedicament(req, res);
}

const medicament_recherche = (req, res) => {
    let critere = req.query.nom;
    medicament_model.readUnMedicament(req, res, critere);
}

const medicament_insert = (req, res) => {
    medicament_model.insertMedicament(req,res);
}

const medicament_insert_page = (req, res) => {
    res.render('insertion_medicament', {});
}

const medicament_erreur_recherche = (req, res) => {
    res.render('erreur_recherche', {})
}

module.exports = {
    medicaments_tous,
    medicament_recherche,
    medicament_insert,
    medicament_insert_page,
    medicament_erreur_recherche
}