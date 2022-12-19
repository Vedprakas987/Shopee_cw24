import React from 'react';
import {Image,Text,Heading} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <div>
            <Image src={image}/>
           <Heading>{price}</Heading> 
           <Text>{titele}</Text>
        </div>
    );
}

export default Bestsellingcars;
