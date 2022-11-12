import React from 'react'
import "./ItemDetail.css"
import t from 'typy';

const ItemDetail = ({product}) => {
  return (
    <div className='detBody'>
      <h1 className='detTitle'> {product.title}</h1>
      <img  className='detImg' src = {product.image}/>
      <h2>Price: {product.price}</h2>
      
         
      
      
    </div>
  )
}

export default ItemDetail