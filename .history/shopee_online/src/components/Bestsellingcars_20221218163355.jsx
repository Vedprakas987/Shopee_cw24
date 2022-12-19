import React from 'react';
import {Image,Text,Heading} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <div>
            <Image src={image}/>
           <Text>₹{price}</Text> 
           <Heading>{title}</Heading>
        </div>
    );
}

export default Bestsellingcard;
