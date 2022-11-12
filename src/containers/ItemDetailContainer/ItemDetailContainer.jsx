import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { RingLoader } from 'react-spinners';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        ( async ()=> {
            let response;
            try {
                 
                response = await fetch(`https://fakestoreapi.com/products/${id}`);
                } catch (error) {
                    console.log(error);
                }
                const data = await response.json()
                setProduct(data)
            })()
        }, [id])
        
    return(product ? <ItemDetail product={product}/> :  <RingLoader size={120}> </RingLoader>) 
};

export default ItemDetailContainer;