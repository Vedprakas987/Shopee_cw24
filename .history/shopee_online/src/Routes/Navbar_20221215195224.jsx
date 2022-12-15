import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,Button} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"
const Navbar = () => {
    return (
        <Flex>
        <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" >
            <He
            </Button>
            </NavLink>    
        </Flex>
    );
}

export default Navbar;
