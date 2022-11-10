import React from 'react'

const ItemDetail = ({product}) => {
  
  return (
    <div>
      nombre: ${product.title} ,
      <img  style = {{
        width:200 , height: 200,
      }} src = {product.image}/>
    </div>
  )
}

export default ItemDetail