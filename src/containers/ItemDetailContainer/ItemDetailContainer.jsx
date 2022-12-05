import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { RingLoader } from 'react-spinners';
import {db} from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getCharacterDetail = async () => {
            
            

            //Viene de la docu de firebase
            //1ero generamos la referencia al documento. Tercer parámetro: es el ID del documento a consultar
            const docRef = doc(db, "fakestoreProducts", id);

            //2do generar la petición
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log(docSnap.id)
                console.log("Document data:", docSnap.data());
                setProduct({...docSnap.data(), id: docSnap.id})
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        getCharacterDetail()
        //hacer el fetch del detalle del producto
    }, [id])
        const styless ={position: "relative",
                        marginTop: 150,
                        marginLeft: "50%"
                        
        }
    return(product ? <ItemDetail product={product}/> :  <RingLoader cssOverride={styless} size={120}> </RingLoader>) 
};

export default ItemDetailContainer;