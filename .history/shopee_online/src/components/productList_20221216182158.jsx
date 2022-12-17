import React from 'react';
import Productcard from './productcard';
import { SimpleGrid,Box,Card} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <SimpleGrid column={{base:2,sm:2,md:3,lg:4,xl:5,"2xl":6}} gap={6}>
    {
        products.map((el)=>
        (
        <Box>
            <Productcard key={el.price} {...el}/>
        </Box>
        )
        )
    }
      </SimpleGrid>
          
         
    );
}

export default ProductList;
