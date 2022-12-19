import React from 'react';
import {Image,Center,Container,Text,Heading,CardHeader} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <Container>
   <div style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <Image src={image}/>
            <CardHeader style={{color:"black"}}>{title}</CardHeader>
           <h2 style={{fontWeight:"bold"}}>₹{price}</h2> 
        </div>
        </Container>
     
    );
}

export default Bestsellingcard;
