import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,B} from "@chakra-ui/react"
const Navbar = () => {
    return (
        <div>
        <NavLink to="/new">
            <header>New</header>
            </NavLink>    
        </div>
    );
}

export default Navbar;