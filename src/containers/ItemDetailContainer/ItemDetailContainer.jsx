import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

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
        
    return <ItemDetail product={product}/>
};

export default ItemDetailContainer;