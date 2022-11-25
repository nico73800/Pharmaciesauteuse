const mysql = require("mysql2");
const iniparser = require("iniparser");



/*
let module_connexion = mysql.createConnection({
    host: configDB['dev']['host'],
    port: configDB['dev']['port'],
    user: configDB['dev']['user'],
    password: configDB['dev']['password'],
    dbname: configDB['dev']['dbname']
})
 */

let module_connexion = mysql.createConnection({
    host: 'localhost',
    port: '3308',
    user: 'root',
    password: 'root',
    database: 'pharmacie'
})

const connect = module_connexion.connect((err) => {
    if (!err) {
        console.log("connexion ok");
    } else {
        console.log("Erreur de connexion !" + JSON.stringify(err));
    }
})

module.exports = {
    module_connexion,
    connect
}