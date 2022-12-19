import React from 'react';
import {Image,Text,Heading} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <div>
            <Image src={image}/>
            <h>{title}</h>
           <h2>₹{price}</h2> 
        </div>
    );
}

export default Bestsellingcard;
