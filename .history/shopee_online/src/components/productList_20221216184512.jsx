import React from 'react';
import Productcard from './productcard';
import { SimpleGrid,Box,Card} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <    gridTemplateColumns="repeat 3 1fr" spacing={6}>
    {
        products.map((el)=>
        (
        <Box>
            <Productcard key={el.price} {...el}/>
        </Box>
        )
        )
    }
      </>
          
         
    );
}

export default ProductList;
