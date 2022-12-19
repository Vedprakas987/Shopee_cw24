import React from 'react';
import Productcard from './productcard';
import {SimpleGrid,Box} from "@chakra-ui/react"
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
       <SimpleGrid columns={[1, 2, gap={5}>
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
    </div>
  );
}

export default ProductList;
