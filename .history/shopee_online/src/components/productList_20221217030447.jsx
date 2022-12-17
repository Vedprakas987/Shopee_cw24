import React from 'react';
import Productcard from './productcard';
import {SimpleGrid,Box,Card, GridItem} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} gap={5}>
        {
        products.map((el)=>
        (
        <Box>
            <Productcard key={el.price*Math.random()} {...el}/>
        </Box>
        )
        )
    }
    </SimpleGrid>
         
    );
}

export default ProductList;
