const express = require("express");
const router = express.Router();

const ImageData = require('../models/imageModel')

//#region get questions
router.get('/api/getimages', (request, response, next) => {
  ImageData.find().sort([['Title', 1]]).then(documents => {
    response.status(200).json({
      message: 'tips fetched sucessfully',
      questions: documents
    });
  });
});
module.exports = router
