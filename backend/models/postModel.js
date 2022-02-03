//Backend Data Model für die Fragen
const mongoose = require('mongoose')

const postDataSchema = mongoose.Schema({
  Title: { type: String},
  Text: { type: String},
});

module.exports = mongoose.model('postData', postDataSchema);
