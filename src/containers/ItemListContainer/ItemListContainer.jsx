import React from "react";
import { Carousel } from "../Carousel/Carousel";
import "./ItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return(
        <div className="ItemListContainer" style = {
            {
                backgroundImage : "url(https://p4.wallpaperbetter.com/wallpaper/392/8/990/vinyl-4k-desktop-background-wallpaper-preview.jpg)",
                backgroundSize: "cover",
            }
            }>
            
            <h2 className="greeting"> {greeting} </h2>
            <Carousel/>


            
        </div>
    )

} 
export default ItemListContainer ;