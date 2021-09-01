// Importieren der benötigten Node Pakete
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

// Importieren der Mongoose Schemata
 const clinicRoutes = require('./routes/clinic')
 const countryRoutes = require('./routes/country')
 const userRoutes = require('./routes/user')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//#region Database connection
//Verbindung mit der lokalen MongoDB
mongoose.connect('mongodb://myUserAdmin:12345@127.0.0.1:27017/admin')
  .then(()=>{
    console.log('connected to database!')
  })
  .catch(()=>{
    console.log('connection failed!')
  });
//#endregion

//#region Node Access configuration
//Konfiguration der Zugangsberechtigungen
app.use((request, response, next) =>{
  response.setHeader("Access-Control-Allow-Origin","*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});
//#endregion

//Nutzung der Schemata und export des gesamten app Moduls
app.use(clinicRoutes)
app.use(userRoutes)
app.use(countryRoutes)
module.exports = app;

