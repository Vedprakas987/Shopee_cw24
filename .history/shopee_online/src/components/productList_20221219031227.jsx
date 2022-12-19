import React from 'react';
import Productcard from './productcard';
import {SimpleGrid,Box} from "@chakra-ui/react"
import Lin
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
       <SimpleGrid columns={[1,2,3,4,4]} gap={5}>
        {
        products.map((el)=>
        (
        <Box>
            <Productcard key={el.id} {...el}/>
        </Box>
        )
        )
    }
    </SimpleGrid>
    </div>
  );
}

export default ProductList;
