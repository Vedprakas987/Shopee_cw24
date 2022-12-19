import React from 'react';
import {Image,Center,Con} from "@chakra-ui/react"
const Bestsellingcard = ({title,price,image}) => {
    return (
        <div style={{boxShadow:"box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <Image src={image}/>
            <h1 style={{color:"black"}}>{title}</h1>
           <h2 style={{fontWeight:"bold"}}>₹{price}</h2> 
        </div>
    );
}

export default Bestsellingcard;
