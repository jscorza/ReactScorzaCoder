import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
// import rawProducts from '../../data/products';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from "../../firebase/config"
export default function ItemListContainer ({greeting}) {
    const {categoryId} = useParams()

    console.log(categoryId);

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        ( async ()=> {
            try {
                setLoading(true);
                let q;
                if (categoryId) {
                    q = query(collection(db, "fakestoreProducts"), where("category", "==", categoryId))
                } else {
                    q = query(collection(db, "fakestoreProducts"));
                }

                //2do paso: realizar la query
                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    productosFirebase.push({...doc.data(), id: doc.id})
                });
                setProducts(productosFirebase);
            } catch (error) {
                console.log(error);
            }finally {
                setLoading(false)
            }
        })();
    }, [categoryId]);


    const styless ={position: "relative",
    marginTop: 150,
    marginLeft: "50%"
    
}

    return (
        
        <div className='item-list-container'>
            {products.length  && !loading ?  <ItemList products={products}/> :   <RingLoader cssOverride={styless} size={150}> </RingLoader> }   
        </div>
        
        
    )
}