import React from 'react'; 
import {Link,NavLink} from "react-router-dom"
const Home = () => {
    return (
        <div>
            <NavLink to="/new">New</NavLink>
            <NavLink to="/bestselling">Bestselling</NavLink>
            <NavLink to="/brand">Brand</NavLink>
            <NavLink to="/new">Clearance</NavLink>
            <NavLink to="/new">Deals</NavLink>
            <NavLink to="/new">Coupon</NavLink>
            <NavLink to="/new">App Only</NavLink>
            <NavLink to="/new">WhatGeek</NavLink>


        </div>
    );
}

export default Home;
