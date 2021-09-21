//Backend Data Model
const mongoose = require('mongoose')

const imageDataSchema = mongoose.Schema({
  Title: { type: String},
  ImageNumber: { type: Number},
  Data: { type: Buffer},
  ContentType: { type: String}
});

module.exports = mongoose.model('imageDataModel', imageDataSchema);
