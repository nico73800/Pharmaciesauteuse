const express = require('express');
const createError = require('http-errors')
const ejs = require('ejs');
const path = require("path");
let bodyParser = require('body-parser');
const urlencodedparser = bodyParser.urlencoded({ extended: false});
const Routeur_medicament = require('./routes/route_medicament');

app = express();

// Paramétrage de l'app
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'))
app.use(express.json());

// écoute du port 3000 sur l'adresse localhost
app.listen(3000, "127.0.0.1", () => {
    console.log("Project okay")
});

app.get('/', (req,res) => {
    res.send("Acceuil à faire !");
});

// Utilisation des routeurs
app.use("/medicaments", Routeur_medicament);

// Mise en place de l'erreur 404
app.use((req,res,next) => {
    res.status(404).send("Erreur 404 : Page non trouvée");
})

