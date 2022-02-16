//Backend Data Model für Posts
const mongoose = require('mongoose')

const postDataSchema = mongoose.Schema({
  Title: { type: String},
  Text: { type: String},
  EditCode: { type: String}
});

module.exports = mongoose.model(
  'postData', postDataSchema);

