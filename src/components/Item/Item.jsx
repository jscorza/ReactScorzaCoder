import React from 'react'
import { useNavigate } from 'react-router-dom'

//Card
const Item = ({product}) => {

  const navigate = useNavigate()

  const navigateDetail = () => {
    //Navegar hacia el detalle del producto
    navigate(`/detail/${product.id}`)
  }
 
  return (
    <div onClick={navigateDetail}>
      <img style={{width: 100,height: 100}} src={product.image} alt="ropa"/>
      <p key={product.id} > {product.title}, id: {product.id}</p>
    </div>
  )
}

export default Item