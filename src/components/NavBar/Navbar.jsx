import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';
import Title from "../Title/Title"

const NavBar = () => {

    return (
        
        <ul>
            <Title></Title>
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