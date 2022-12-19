import React from 'react';
import {Image,Center,Container,Text,Heading,Stack,HStack,VStack,Grid} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image,height}) => {
    return (
        <Container height={`${height}vh`} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
   <div style={{boxShadow:"box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
            <Image src={image}/>
            <Grid gap="5px">
            <Text  fontWeight="bold" >{title}</Text>
            <HStack>
           <Text 
           color="green"  style={{fontWeight:"bold"}}>₹{price}</Text> 
           <Text color="red.500" textDecoration={'line-through'}>
              { `₹${Math.floor(price*1.2)}`}
            </Text>
            </HStack>
            </Grid>
        </div>
        </Container>
     
    );
}

export default Bestsellingcard;
