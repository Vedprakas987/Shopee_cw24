import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,Button} from "@chakra-ui/react";
npm i @chakra-ui/icons
# or
yarn add @chakra-ui/icons
const Navbar = () => {
    return (
        <Flex>
        <NavLink to="/new">
            <Button>New</Button>
            </NavLink>    
        </Flex>
    );
}

export default Navbar;
