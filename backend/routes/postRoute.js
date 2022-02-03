const express = require("express");
const router = express.Router();

const postData = require("../models/postModel")

//#region get posts
router.get('', (request, response, next) => {
  postData.find().sort([['Title', 1]]).then(documents => {
    response.status(200).json({
      message: 'posts fetched sucessfully',
      posts: documents
    });
  });
});
//#endregion
router.get("/:id", (req, res, next) => {
  postData.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "post not found!" });
    }
  });
});


router.delete('/:id', (request, response, next) => {
  postData.deleteOne({_id: request.params.id}).then(result =>{
    console.log(result)
    response.status(200).json({
      message:'post deleted!'
    });
  })
});

  router.post('', (request, response, next) => {
    const post = new PostData({
      Title: request.body.Title,
      Text: request.body.Text
    });
    post.save().then(result =>{
      //console.log(result)
      response.status(201).json({
        message:'post added sucessfully'
      });;
    });
  });


  router.put("/:id", (request, response, next) =>{
    const post = new postData({
      _id: request.params.id,
      Title: request.body.Title,
      Text: request.body.Text,
    });
    postData.updateOne({_id: request.params.id}, post).then(result =>{
      console.log(result);
      console.log(request.params.id)
      response.status(200).json({message: "Post Update sccessfull!"});
    });
  });

module.exports = router
