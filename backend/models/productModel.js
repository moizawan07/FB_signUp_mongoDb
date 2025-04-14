const mongoose = require('mongoose')

let schema = mongoose.Schema({
    name : String,
    title : String,
    description : String,
    imageUrl: String
})

module.exports = mongoose.model('products', schema)