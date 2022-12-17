import { ReactNode } from 'react';
import { Input, VStack,Text } from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'
import { BsFillCartCheckFill } from "react-icons/bs";
import {Link,NavLink} from "react-router-dom"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['New','Bestselling','Brand','Clearance','Deal','Coupon','App only','WhatGeek',];



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('dodgerblue', 'dodgerblue')} px={3}  padding={3} paddingRight="2%">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={2} alignItems={'center'}>
            <Box>
              <img   style={{borderRadius:"60%",width:"40%",marginLeft:"10%"}} src="https://i.imgur.com/4H4HfdD.png"/>
            </Box>
            <VStack w={{base:"120%",md:"100%",sm:"100%"}}  padding="0p 2rem">
                <HStack w="100%">
                <Input  borderRadius="20px"  bg="white" color="black"/>
                <SearchIcon color="white" cursor="pointer"/>
                </HStack>
            <HStack
              as={'nav'}
              spacing={4}
              color="white"
              fontWeight="bold"
              
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink to={`/${link}`}   key={link}>{link}</NavLink>
              ))}
            </HStack>
            </VStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Box  marginLeft={{base:"10%",md:"5%",sm:"4%"}} cursor="pointer" marginRight={10}>
            <Text color="white" fontWeight="bold">Cart</Text>
            </Box>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                size={1}
                >
               <Avatar src="https://avatars.githubusercontent.com/u/108031543?v=4" size="sm"></Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>Register</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}