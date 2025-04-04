const express = require('express')
const myRouter = express.Router()
const signAuth  = require('../middleware/auth')
const signUp  = require('../controllers/signup')

myRouter.post('/signUp',signAuth , signUp)

module.exports = myRouter