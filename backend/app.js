// Importieren der benötigten Node Pakete
const express = require('express');
const app = express();
const mongoose = require('mongoose')


// Importieren der Mongoose Schemata
const questionRoutes = require('./routes/questionRoute.js');
const tipRoutes = require('./routes/tipRoute.js');
const imageRoutes = require('./routes/imageRoute.js');


//#region Database connection
//Verbindung mit der lokalen MongoDB
mongoose.connect('mongodb+srv://Trashmaster_standardUser:JlxOlswzSfHpOL5f@clustersweteam1.9dhpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
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
app.use(questionRoutes)
app.use(tipRoutes)
app.use(imageRoutes)
module.exports = app;

