import React from 'react';
import {Image,Center,Container,Text,Heading,CardHeader} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <Container>
   <div style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <Image src={image}/>
            <Text fontWeight="bold" >{title}</Text>
        <     style={{fontWeight:"bold"}}>₹{price}</> 
        </div>
        </Container>
     
    );
}

export default Bestsellingcard;
