import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css" ;

//Se encarga de hacer el map con los productos
const ItemList = ({products}) => {
  return (
    <div className='lista'>
    {products.map(product => {
      console.log(product)
        return <Item key={product.id}  product={product}/>
    
    })}
  </div>
  )

}

export default ItemList