import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <h1>Welcome to Navbar</h1>
         <Link to="/">Home</Link>   
        </div>
    );
}

export default Navbar;
