import React from 'react';
import {Image,Text,Heading} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <div>
            <Image src={image}/>
            <h3>{title}</h3>
           <Text>₹{price}</Text> 
        </div>
    );
}

export default Bestsellingcard;
