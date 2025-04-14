const productModel = require("../models/productModel");

const getProducts = async (req, res) =>{
 try {
    let allProducts = await productModel.find()
    console.log('allProducts Return', allProducts);

    res.json({message : 'Sucess',  data : allProducts}) 
 } 
 catch (error) {
    console.log('catch', error);

    res.json({message : error})
    
 }

} 

module.exports = getProducts