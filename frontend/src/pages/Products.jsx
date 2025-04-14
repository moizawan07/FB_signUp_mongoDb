import { useState, useEffect } from 'react';
import Card from '../components/Card'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const ProductsPage = () => {
   const [allProducts, setAllProducts] = useState(0)
   
  useEffect( () => {
  
      fetch('http://localhost:3000/showProducts')
        .then(res => res.json())
        .then(data => setAllProducts(data.data))
        .catch(err => console.log('errror', err))
      
       
   

  }, [])
  
  return (
    <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

      {/* Product Cards Display */}
      <div className="flex gap-8 justify-center my-20">

        {allProducts.length > 0 ?
          allProducts.map((item, index) => {
           return <Card
                    key = {index}
                    name = {item.name} 
                    title = {item.title} 
                    description = {item.description} 
                    imageUrl = {item.imageUrl} 
                  />

          })
         : <p className='text-center text-gray-500'>No Products</p>}
      </div>

    <Footer />
    </div>
  );
};

export default ProductsPage;
