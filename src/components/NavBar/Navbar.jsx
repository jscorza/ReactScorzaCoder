import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';
import Title from "../Title/Title"
import Logo from "../Logo/Logo"

const NavBar = () => {

    return (
        
        <ul>
            <div style={{display: "flex",
                         flexDirection:"row"
                        ,alignItems: "center"
                    }}
            > <Logo></Logo> <Title></Title></div>
            
            <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/men's clothing">Man</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Women</Link>
            </li>
            </div>
            <CartWidget />
        </ul>
    );
};

export default NavBar;