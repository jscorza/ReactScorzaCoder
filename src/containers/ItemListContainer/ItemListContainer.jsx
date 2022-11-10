import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
// import rawProducts from '../../data/products';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
export default function ItemListContainer ({greeting}) {
    const {categoryId} = useParams()

    console.log(categoryId);

    const [products, setProducts] = useState([])
    useEffect(()=> {
        ( async ()=> {
            try {
                console.log(categoryId);
                let response;
                if (categoryId) {
                    response = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`);
                } else {
                    response = await fetch(`https://fakestoreapi.com/products`);
                }
                console.log(response);
                const data = await response.json();
                console.log(data);
                setProducts(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [categoryId])

    return (
        <>
        <div className='item-list-container'>
                
        </div>
        <ItemList products={products}/>
        </>
    )
}