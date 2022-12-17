import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,Button} from "@chakra-ui/react";
const Navbar = () => {
    return (
        <Flex>
        <NavLink to="/new">
            <><Button>New</Button>
            </NavLink>    
        </Flex>
    );
}

export default Navbar;
