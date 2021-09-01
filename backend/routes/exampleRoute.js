const express = require("express");

const router = express.Router();


const CountryData = require('../models/countryData')

//#region get countries
router.get('/api/getcountries'/* Filter unter welchem Pfad die Middleware nur angesprochen werden darf*/, (request, response, next) => {
  CountryData.find().sort([['CountryName', 1]]).then(documents => {
    response.status(200).json({
      message: 'countries fetched sucessfully',
      countries: documents
    });
  });
});
//#endregion

//#region Add Country
router.post('/api/addcountry'/* Filter unter welchem Pfad die Middleware nur angesprochen werden darf*/, (request, response, next) => {
  const country = new CountryData({
    CountryCode: request.body.CountryCode,
    CountryName: request.body.CountryName,
    CountryRegAdm: request.body.CountryRegAdm,
    SysLog: request.body.SysLog,
  });
  country.save();
  response.status(201).json({
    message:'country added sucessfully'
  });
});
//#endregion

router.put("/api/updatecountry/:id", (request, response, next) =>{
  const country = new CountryData({
    _id: request.params.id,
    CountryName: request.body.CountryName,
    CountryCode: request.body.CountryCode,
    CountryRegAdm: request.body.CountryRegAdm,
    SysLog: request.body.SysLog
  });
  UserData.updateOne({_id: request.params.id}, country).then(result =>{
    console.log(result);
    console.log(request.params.id)
    response.status(200).json({message: "Update sccessfull!"});
  });
});

module.exports = router
