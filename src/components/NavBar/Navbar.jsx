import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Title } from "../Title/Title";

import './Navbar.css';
const NavBar = () => {
    return (
        <ul>

            <Title/>
            <div>
                <li>
                    <a href="#Inicio">INICIO</a>
                </li>
                <li>
                    <a href="#VINILOS">VINILOS</a>
                </li>
                <li>
                    <a href="DISCOS">DISCOS</a>
                </li>
                <li>
                    <a href="#POSTERS">POSTERS</a>
                </li>
                <li>
                    <a href="#NOSOTROS">NOSOTROS</a>
                </li>
            </div>
            
            <CartWidget></CartWidget>

        </ul>
        

    )
}
export default NavBar;