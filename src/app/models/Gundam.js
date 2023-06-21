const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Gundam = new Schema({
    name: String,
    price: String,
    image: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Gundam', Gundam)