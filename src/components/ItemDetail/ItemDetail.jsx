import React from 'react'
import "./ItemDetail.css"
import t from 'typy';

const ItemDetail = ({product}) => {
  return (
    <div className='detBody'>
      <h1 className='detTitle'> {product.title}</h1>
      <div style={{display:"flex", flexDirection: 'row', alignItems: 'center', justifyItems: 'center'}}>
        <img  className='detImg' src = {product.image}/>
        <p style={{padding:20,margin:10,fontSize:30 }}>{product.description}</p>
      </div>
      <a href="#" class="animated-button1">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  BUY
</a>
      <h2>Price: {product.price}</h2>
      
         
      
      
    </div>
  )
}

export default ItemDetail