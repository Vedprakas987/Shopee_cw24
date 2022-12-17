import { NavLink } from 'react-router-dom';
import React from 'react';
import {Text} from "@chakra-ui/react"
const Navbar = () => {
    return (
        <div>
        <NavLink to="/new"><New</NavLink>    
        </div>
    );
}

export default Navbar;
