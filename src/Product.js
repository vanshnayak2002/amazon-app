import React from 'react'
import "./Product.css";
//import { Button } from '@mui/material';
function product({title,image,price,rating}) {
  return (
    //geneeral structure for product properties 
    <div className='product'>
       <div className="product__info">
        <p>{title}</p>
        <p className='product__prize'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
         {Array(rating).fill().map((_,i) => (
          <p>🌟</p>
          ))}
          </div>
       </div>

        <img src={image} alt=''
        
        ></img>

        <button>
               Add to Basket
        </button>



    </div>
    
    
 
    
    
  )
}

export default product
