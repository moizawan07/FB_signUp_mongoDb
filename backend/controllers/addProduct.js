const productModel = require("../models/productModel");

const addProduct = async (req, res) => {
   console.log("body", req.body);
   console.log("file", req.file);

   let {name, title, description} = req.body
   let file = req.file    // File all Info Stored in this variable

   try {
      let productAdd = await productModel.create({
         name, 
         title, 
         description,
         imageUrl : `/uploads/${file.filename}`
      })

      res.send('Sucessfully Add')

   } 
   catch (error) {
      console.log('catch err', error);

      res.send("Server Error...")
      
   }
}


module.exports = addProduct