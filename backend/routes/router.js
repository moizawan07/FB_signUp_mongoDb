const express = require('express')
const myRouter = express.Router()
const signAuth  = require('../middleware/auth')
const signUp  = require('../controllers/signup')
const login = require('../controllers/login')

myRouter.post('/signUp',signAuth , signUp)

myRouter.post('/login', login)

module.exports = myRouter