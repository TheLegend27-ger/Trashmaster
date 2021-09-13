const express = require("express");
const router = express.Router();

const QuestionData = require('../models/questionModel')

//#region get questions
router.get('/api/getquestions', (request, response, next) => {
  QuestionData.find().sort([['Title', 1]]).then(documents => {
    response.status(200).json({
      message: 'questions fetched sucessfully',
      questions: documents
    });
  });
});
//#endregion
/*
//#region Add Country
router.post('/api/addcountry', (request, response, next) => {
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
*/
module.exports = router
