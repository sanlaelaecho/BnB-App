const Schema = require('mongoose').Schema;

const citySchema = new Schema({
    name: { type: String, required: true },
    img: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: { type: String, required: true, default: 0 }
  }, {
    timestamps: true
  })

module.exports = countrySchema  