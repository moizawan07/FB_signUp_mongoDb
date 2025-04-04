const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const myRouter = require('./routes/router')
const dbConnect = require('./DB/dbConfig')


app.use(express.json())
app.use(cors())
dbConnect()  // DB Connect Function Call 
app.use(myRouter)

app.listen(3000, () => console.log('Server is Running on 3000'))