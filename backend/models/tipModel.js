//Backend Data Model
const mongoose = require('mongoose')

const tipDataSchema = mongoose.Schema({
  Title: { type: String},
  Text: { type: String},
  ImageNumber: { type: Number}
});

module.exports = mongoose.model('tipData', tipDataSchema);
