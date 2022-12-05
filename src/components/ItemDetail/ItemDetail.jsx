import React from 'react'
import "./ItemDetail.css"
import { Shop } from "../../contexts/Shop";
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({product}) => {

  const [quantityItemDetail, setQuantityItemDetail] = useState(0);
  const {addProduct} = useContext(Shop);
    const navigate = useNavigate();


    const confirmPurchase = (quantity) => {
        console.log(quantity);
        addProduct({...product, quantity})
        setQuantityItemDetail(quantity);
    };


    const handleNavigate = () => {
      navigate('/cart')
    }


  return (
    <div className='detBody'>
      <h1 className='detTitle'> {product.title}</h1>
      <div style={{display:"flex", flexDirection: 'row', alignItems: 'center', justifyItems: 'center'}}>
        <img  className='detImg' src = {product.image}/>
        <p style={{padding:20,margin:10,fontSize:30 }}>{product.description}</p>
      </div>
      <a href="#" className="animated-button1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      BUY
      </a>
      <h2>Price: {product.price}</h2>
      
      {quantityItemDetail ? 
      <button onClick={handleNavigate}>Go cart</button>
      : 
      <ItemCount onAdd={confirmPurchase} initial={1} stock={20} />
      }    
    </div>
  )
}

export default ItemDetail