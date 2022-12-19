import React from 'react';
import {Image,Center,Container,Text,Heading,Stack,HStack} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <Container boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
   <div style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <Image src={image}/>
            <Stack>
            <Text height="15vh" fontWeight="bold" >{title}</Text>
            <HStack>
           <Text color="green"  style={{fontWeight:"bold"}}>₹{price}</Text> 
           <Text color="red.500" textDecoration={'line-through'}>
              { `₹${Math.floor(price*1.2)}`}
            </Text>
            </HStack>
            </Stack>
        </div>
        </Container>
     
    );
}

export default Bestsellingcard;
