const express = require("express");
const router = express.Router();

const TipData = require('../models/tipModel')

//#region get questions
router.get('/api/gettips', (request, response, next) => {
  TipData.find().sort([['Title', 1]]).then(documents => {
    response.status(200).json({
      message: 'tips fetched sucessfully',
      questions: documents
    });
  });
});
module.exports = router
