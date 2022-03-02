const express = require("express");
const router = express.Router();

const TipData = require('../models/tipModel')

//#region get questions
router.get('', (request, response, next) => {
  TipData.find().then(documents => {
    response.status(200).json({
      message: 'tips fetched sucessfully',
      tips: documents
    });
  });

});
router.get("/:id", (req, res, next) => {
  TipData.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "tip not found!" });
    }
  });
});


router.delete('/:id', (request, response, next) => {
  TipData.deleteOne({_id: request.params.id}).then(result =>{
    console.log(result)
    response.status(200).json({
      message:'Tip deleted!'
    });
  })
});

  router.post('', (request, response, next) => {
    const tip = new TipData({
      Title: request.body.Title,
      Text: request.body.Text,
      TipType: request.body.TipType,
      ImageBase64: request.body.ImageBase64,
    });
    tip.save().then(result =>{
      //console.log(result)
      response.status(201).json({
        message:'tip added sucessfully'
      });;
    });
  });


  router.put("/:id", (request, response, next) =>{
    const tip = new TipData({
      _id: request.params.id,
      Title: request.body.Title,
      Text: request.body.Text,
      TipType: request.body.TipType,
      ImageBase64: request.body.ImageBase64,
    });
    TipData.updateOne({_id: request.params.id}, tip).then(result =>{
      console.log(result);
      console.log(request.params.id)
      response.status(200).json({message: "Tip Update sccessfull!"});
    });
  });



module.exports = router
