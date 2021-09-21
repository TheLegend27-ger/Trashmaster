const express = require("express");
const router = express.Router();

const TipData = require('../models/tipModel')

//#region get questions
router.get('/api/gettips', (request, response, next) => {
  TipData.find().sort([['Title', 1]]).then(documents => {
    response.status(200).json({
      message: 'tips fetched sucessfully',
      tips: documents
    });
  });
});
router.delete('/api/deletetip/:id', (request, response, next) => {
  TipData.deleteOne({_id: request.params.id}).then(result =>{
    console.log(result)
    response.status(200).json({
      message:'Tip deleted!'
    });
  })

});


module.exports = router
