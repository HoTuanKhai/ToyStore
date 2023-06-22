const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema

const Gundam = new Schema({
    name: {type: String},
    price: {type: String},
    image: {type: String},
    videoId: {type: String},
    slug: { type: String, slug: 'name' },
},{
    timestamps: true,
})

// Add plugins
mongoose.plugin(slug)
Gundam.plugin(mongooseDelete)

module.exports = mongoose.model('Gundam', Gundam)