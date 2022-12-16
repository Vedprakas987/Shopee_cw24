import { ReactNode } from 'react';
import { Input, VStack,Text } from '@chakra-ui/react';
import {SearchIcon} from '@chakra-ui/icons'
import { IconName } from "react-icons/bs";

BsFillCartCheckFill
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('green', 'green')} px={3}  padding={3}>
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
              <img   style={{borderRadius:"60%",width:"40%",marginLeft:"10%"}} src="https://i.imgur.com/Ea4kEa7.png"/>
            </Box>
            <VStack w={{base:"120%",md:"100%",sm:"100%"}}  padding="0p 2rem">
                <HStack w="100%">
                <Input  borderRadius="20px"  bg="white" color="black"/>
                <SearchIcon cursor="pointer"/>
                </HStack>
            <HStack
              as={'nav'}
              spacing={4}
              color="white"
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            </VStack>
          </HStack>
          <Flex alignItems={'center'}>
            <BsCart4 marginLeft={{base:"10%",md:"5%",sm:"4%"}} cursor="pointer" marginRight={10}/>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                size={1}
                >
               <Avatar></Avatar>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
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

      <Box p={4}>Main Content Here</Box>
    </>
  );
}