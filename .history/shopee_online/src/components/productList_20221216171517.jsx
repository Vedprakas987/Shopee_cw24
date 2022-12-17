import React from 'react';
import Productcard from './productcard';
import { Container,Grid,GridItem } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
       
           {
            products.map((el)=>{
                console.log(el)
                return(
                    <Productcard {...el}/>
                )
            })
           }
         
    );
}

export default ProductList;
