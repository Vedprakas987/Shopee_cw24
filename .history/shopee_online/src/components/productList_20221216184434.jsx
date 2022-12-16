import React from 'react';
import Productcard from './productcard';
import { SimpleGrid,Box,Card} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <SimpleGrid gridTe spacing={6}>
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
