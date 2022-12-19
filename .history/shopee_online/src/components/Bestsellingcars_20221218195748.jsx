import React from 'react';
import {Image} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <div style={{boxShadow}}>
            <Image src={image}/>
            <h1 style={{color:"black"}}>{title}</h1>
           <h2 style={{fontWeight:"bold"}}>₹{price}</h2> 
        </div>
    );
}

export default Bestsellingcard;
