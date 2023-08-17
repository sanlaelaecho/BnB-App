const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    img: String,
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    airport: {type: String, required: true, unique: true},
    price: { type: Number, required: true, default: 0 }
  }, {
    timestamps: true
  })

module.exports = itemSchema  