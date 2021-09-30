//Backend Data Model
const mongoose = require('mongoose')

const questionDataSchema = mongoose.Schema({
  Title: { type: String},
  Question: { type: String},
  Answer1: { type: String},
  Answer2: { type: String},
  Answer3: { type: String},
  Answer4: { type: String},
  Answer: { type: String},
  TipType: { type: String}
});

module.exports = mongoose.model('questionData', questionDataSchema);
