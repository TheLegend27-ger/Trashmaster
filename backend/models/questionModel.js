//Backend Data Model für die Fragen
const mongoose = require('mongoose')

const questionDataSchema = mongoose.Schema({
  Title: { type: String},
  Question: { type: String},
  Answer1: { type: String},
  Answer2: { type: String},
  Answer3: { type: String},
  Answer4: { type: String},
  Answer: { type: String},
  QuestionType: { type: String}
});

module.exports = mongoose.model('questionData', questionDataSchema);
