const patient_model = require('../models/patients_models');

// Mise en place de le fonction de recherche des patients
const patient_tous = (req, res) => {
    patient_model.readPatient(req, res);
}

// Mise en place de le fonction de recherche d'un patient
const patient_recherche = (req, res) => {
    let critere = req.query.nom;
    patient_model.readUnPatient(req, res, critere);
}

// Mise en place de le fonction d'ajout d'un patient
const patient_insert = (req, res) => {
    patient_model.insertPatient(req,res);
}

// Mise en place de l'ajout d'un patient sur le site
const patient_insert_page = (req, res) => {
    res.render('insertion_patient', {});
}

const patient_page_modification = (req, res) => {
    let critere = req.query.idPatient;
    patient_model.modification_patient_page(req,res,critere);
}

const patient_update = (req, res) => {
    let critere = req.query.idPatient;
    patient_model.update_patient(req,res,critere);
}

// Mise en place de l'erreur de recherche d'un patient
const patient_erreur_recherche = (req, res) => {
    res.render('erreur_recherche', {})
}

// Exportation des opérations
module.exports = {
    patient_tous,
    patient_recherche,
    patient_insert,
    patient_insert_page,
    patient_page_modification,
    patient_update,
    patient_erreur_recherche,
}