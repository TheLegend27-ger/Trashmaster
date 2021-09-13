//Backend Data Model
const mongoose = require('mongoose')

const questionDataSchema = mongoose.Schema({
  Title: { type: String},
  Question: { type: String},
  AnswerOptions: { type: Array},
  Answer: { type: String}
});

module.exports = mongoose.model('questionData', questionDataSchema);
