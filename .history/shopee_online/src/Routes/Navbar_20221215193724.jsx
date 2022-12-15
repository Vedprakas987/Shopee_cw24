import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,Button} from "@chakra-ui/react";
const Navbar = () => {
    return (
        <Flex>
        <NavLink to="/new">
            <header><Button>New</Button></header>
            </NavLink>    
        </Flex>
    );
}

export default Navbar;
