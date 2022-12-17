import React from 'react'; 
import {Link,NavLink} from "react-router-dom"
const Home = () => {
    return (
        <div>
            <NavLink to="/new">New</NavLink>
            <NavLink to="/bestselling">Bestselling</NavLink>
            <NavLink to="/brand">Brand</NavLink>
            <NavLink to="/clearance">Clearance</NavLink>
            <NavLink to="/deals">Deals</NavLink>
            <NavLink to="/coupon">Coupon</NavLink>
            <NavLink to="/apponly">App Only</NavLink>
            <NavLink to="/whatgeek">WhatGeek</NavLink>
        </div>
    );
}

export default Home;
