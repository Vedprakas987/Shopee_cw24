import React from 'react';
import {Image,Center,Container,Text,Heading,CardHeader} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <Container boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
   <div style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <Image src={image}/>
            <Text maxlen} height="15vh" fontWeight="bold" >{title}</Text>
           <Text color="green" mt="15px" style={{fontWeight:"bold"}}>₹{price}</Text> 
        </div>
        </Container>
     
    );
}

export default Bestsellingcard;
