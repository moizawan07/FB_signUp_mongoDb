const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name : String, 
    email : String, 
    password: String, 
    age : Number
})

const signupModel = mongoose.model('users', schema)

module.exports = signupModel