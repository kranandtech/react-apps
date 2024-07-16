import React, { useContext } from 'react'
import AppContext from './AppContext'
import  './Product.css';

const Product = () => {
  
  const {products} = useContext(AppContext);
  console.log("okkkkk",products);
  return (
    <div>
      {
        products.map((elem)=>{
          return (
            <>
            <div className='product-container'>
            <img  src={elem.image}/>
            <h2>{elem.title}</h2>
            </div>
           
            </>
          )
        })
      }
    </div>
  )
}

export default Product