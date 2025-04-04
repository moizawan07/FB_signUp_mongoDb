const mongoose = require('mongoose')
const URI = process.env.DB_URI

const dbConnect =  async () => {
  
   try {
     await mongoose.connect(URI)
     console.log('DB Connect SucessFully');
   } 
   catch (error) {
    console.log('DB NOT Connect', error)
   }
}
module.exports = dbConnect;