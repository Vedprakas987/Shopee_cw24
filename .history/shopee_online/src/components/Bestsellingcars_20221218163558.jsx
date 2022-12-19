import React from 'react';
import {Image,Text,Heading} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <div>
            <Image src={image}/>
            <h3>{title}</h3>
           <h2>₹{price}</h2> 
        </div>
    );
}

export default Bestsellingcard;
