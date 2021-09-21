const express = require("express");
const router = express.Router();

const ImageDataModel = require('../models/imageModel')

//#region get questions
router.get('/api/getimages', (request, response, next) => {
  ImageData.find().sort([['Title', 1]]).then(documents => {
    response.status(200).json({
      message: 'tips fetched sucessfully',
      images: documents
    });
  });
});
module.exports = router
