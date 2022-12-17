import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,Button} from "@chakra-ui/react";
import {Ha}
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
