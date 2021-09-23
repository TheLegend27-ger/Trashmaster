// Importieren der benötigten Node Pakete
const express = require('express');
const app = express();
const mongoose = require('mongoose')

//#region Node Access configuration
//Konfiguration der Zugangsberechtigungen
app.use((request, response, next) =>{
  response.setHeader("Access-Control-Allow-Origin","*");
  response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});
//#endregion
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


// Importieren der Mongoose Schemata
const questionRoutes = require('./routes/questionRoute');
const tipRoutes = require('./routes/tipRoute');
const imageRoutes = require('./routes/imageRoute');




//#region Database connection
//Verbindung mit der lokalen MongoDB
const mongoURI ='mongodb+srv://Trashmaster_standardUser:JlxOlswzSfHpOL5f@clustersweteam1.9dhpv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>{
    console.log('connected to database!')
  })
  .catch(()=>{
    console.log('connection failed!')
  });




//Nutzung der Schemata und export des gesamten app Moduls
app.use(questionRoutes)
app.use("/api/tips",tipRoutes)
app.use(imageRoutes)
module.exports = app;

