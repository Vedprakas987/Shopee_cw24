import React from 'react'; 
import {Link,Link} from "react-router-dom"
const Home = () => {
    return (
        <div>
            <Link to="/new">New</Link>
            <Link to="/bestselling">Bestselling</Link>
            <Link to="/brand">Brand</Link>
            <Link to="/clearance">Clearance</Link>
            <Link to="/deals">Deals</Link>
            <Link to="/coupon">Coupon</Link>
            <Link to="/apponly">App Only</Link>
            <Link to="/whatgeek">WhatGeek</Link>
        </div>
    );
}

export default Home;
