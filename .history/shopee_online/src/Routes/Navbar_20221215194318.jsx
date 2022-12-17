import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,Button} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"
const Navbar = () => {
    return (
        <Flex>
        <NavLink to="/new">
            <Button as='a' variant="gh">New</Button>
            </NavLink>    
        </Flex>
    );
}

export default Navbar;
