
const controller = require('../controllers/patients.ctrl')
const express = require('express');

// Mise en place du routeur express
const router_patient = express.Router();
const bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false })

// Routage des opérations CRUD
router_patient.get('/', controller.patient_tous);
router_patient.get('/recherche_patient', controller.patient_recherche);
router_patient.get('/insertion_patient', controller.patient_insert_page)
router_patient.get('/patient_page_modification', controller.patient_page_modification)
router_patient.get('/add', controller.patient_insert);
router_patient.get('/update',controller.patient_update)
router_patient.get('/erreur_recherche_patient', controller.patient_erreur_recherche);


module.exports = router_patient;