const express = require("express");
const router = express.Router();

const QuestionData = require('../models/questionModel')

//#region get questions
router.get('', (request, response, next) => {
  QuestionData.find().sort([['Title', 1]]).then(documents => {
    response.status(200).json({
      message: 'questions fetched sucessfully',
      questions: documents
    });
  });
});
//#endregion
router.get("/:id", (req, res, next) => {
  QuestionData.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "question not found!" });
    }
  });
});


router.delete('/:id', (request, response, next) => {
  QuestionData.deleteOne({_id: request.params.id}).then(result =>{
    console.log(result)
    response.status(200).json({
      message:'question deleted!'
    });
  })
});

  router.post('', (request, response, next) => {
    const question = new QuestionData({
      Title: request.body.Title,
      Question: request.body.Question,
      Answer1: request.body.Answer1,
      Answer2: request.body.Answer2,
      Answer3: request.body.Answer3,
      Answer4: request.body.Answer4,
      Answer: request.body.Answer,
      QuestionType: request.body.QuestionType
    });
    question.save().then(result =>{
      //console.log(result)
      response.status(201).json({
        message:'question added sucessfully'
      });;
    });
  });


  router.put("/:id", (request, response, next) =>{
    const question = new QuestionData({
      _id: request.params.id,
      Title: request.body.Title,
      Question: request.body.Question,
      Answer1: request.body.Answer1,
      Answer2: request.body.Answer2,
      Answer3: request.body.Answer3,
      Answer4: request.body.Answer4,
      Answer: request.body.Answer,
      QuestionType: request.body.QuestionType
    });
    QuestionData.updateOne({_id: request.params.id}, question).then(result =>{
      console.log(result);
      console.log(request.params.id)
      response.status(200).json({message: "Question Update sccessfull!"});
    });
  });

module.exports = router
