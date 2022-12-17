import { NavLink } from 'react-router-dom';
import React from 'react';
import {Flex,Button,Heading} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons"
const Navbar = () => {
    return (
        <Flex gap="30px" bg="blue">
        <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" color="white" size="">
            <Heading>New</Heading>
            </Button>
            </NavLink>   
            <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" color="white">
            <Heading>New</Heading>
            </Button>
            </NavLink>   <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" color="white">
            <Heading>New</Heading>
            </Button>
            </NavLink>   <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" color="white">
            <Heading>New</Heading>
            </Button>
            </NavLink>   <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" color="white">
            <Heading>New</Heading>
            </Button>
            </NavLink>   <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" color="white">
            <Heading>New</Heading>
            </Button>
            </NavLink>   <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" color="white">
            <Heading>New</Heading>
            </Button>
            </NavLink>   <NavLink to="/new">
            <Button as='a' variant="ghost" my={20} aria-label="New" w="100%" textDecoration	="none" color="white">
            <Heading>New</Heading>
            </Button>
            </NavLink>  
        </Flex>
    );
}

export default Navbar;
