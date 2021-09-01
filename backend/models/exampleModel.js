//Backend Data Model
const mongoose = require('mongoose')

const countryDataSchema = mongoose.Schema({
  CountryCode: { type: String},
  CountryName: { type: String},
  CountryRegAdm:{ type: Array},
  SysLog: { type: Array}
});

module.exports = mongoose.model('CountryData', countryDataSchema);
