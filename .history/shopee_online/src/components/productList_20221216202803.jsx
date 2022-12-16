import React from 'react';
import Productcard from './productcard';
import {SimpleGrid,Box,Card, GridItem} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
    
        <SimpleGrid templateColumns={{base:1,sm:1,md:2,lg:2,xl:2,"2xl":2}} gap={6}>
    {
        products.map((el)=>
        (
        <>
            <Productcard key={el.price} {...el}/>
        </>
        )
        )
    }
      </SimpleGrid>
          
         
    );
}

export default ProductList;
