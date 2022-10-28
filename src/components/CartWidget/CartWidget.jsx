import React from "react";
 import imagenSVG from './shopping-bag-svgrepo-com (1).svg';

const CartWidget = () => {
  return (
    <div style= {
        {
        alignSelf: "center",
        justifySelf: "end",
        width: 35,
        height: 35,

        }
        
    }>
        
        <img src= {imagenSVG} alt =""/>
        
    </div>
    )
};
export default CartWidget