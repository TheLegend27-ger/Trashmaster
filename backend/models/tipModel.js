//Backend Data Model
const mongoose = require('mongoose')

const tipDataSchema = mongoose.Schema({
  Title: { type: String},
  Text: { type: String},
  TipType: {type: String},
  ImageBase64: { type: String},
});

module.exports = mongoose.model('TipData', tipDataSchema);
