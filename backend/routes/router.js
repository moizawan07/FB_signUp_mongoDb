const express = require('express')
const myRouter = express.Router()
// Controllers & Middlewre Functions Imports
const signAuth  = require('../middleware/auth')
const signUp  = require('../controllers/signup')
const login = require('../controllers/login')
const addProduct = require('../controllers/addProduct')
const upload = require('../middleware/multerSetup') 
const getProducts = require('../controllers/getProducts')
const logout = require('../controllers/logout')



// 1: SignUp Route
myRouter.post('/signUp',signAuth , signUp)

// 2: Login Route
myRouter.post('/login', login)

// 3: Add Product Route               middleware
myRouter.post('/productAdd', upload.single("imageUrl"), addProduct)

// 4: Send All Products [collection]
myRouter.get('/showProducts', getProducts)

// 5: Logout Route
myRouter.get('/logout', logout)



module.exports = myRouter