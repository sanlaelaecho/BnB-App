const mongoose = require('mongoose');
//Ensure the Category model is processed by Mongoose
require('./category');

const countrySchema = require('./countrySchema')

module.exports = mongoose.model('Country', countrySchema);