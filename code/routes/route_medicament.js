const controller = require('../controllers/medicaments_ctrl');
const express = require('express');

const router_medicament = express.Router();
const bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false })

router_medicament.get('/', controller.medicaments_tous);
router_medicament.get('/recherche_medicament', controller.medicament_recherche);
router_medicament.get('/insertion_medicament', controller.medicament_insert_page)
router_medicament.get('/medicament_page_modification', controller.medicament_page_modifcation)
router_medicament.get('/add', controller.medicament_insert);
router_medicament.get('/update',controller.medicament_update)
router_medicament.get('/erreur_recherche_medicament', controller.medicament_erreur_recherche);
// router_medicament.get('/create_pdf', controller.create_table_as_pdf);

module.exports = router_medicament;
