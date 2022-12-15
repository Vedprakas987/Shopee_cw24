import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,Button} from "@chakra-ui/react";
const Navbar = () => {
    return (
        <Flex>
        <NavLink to="/new">
            <header><</header>
            </NavLink>    
        </Flex>
    );
}

export default Navbar;
