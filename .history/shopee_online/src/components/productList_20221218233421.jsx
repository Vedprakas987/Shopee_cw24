import React from 'react';
import Productcard from './productcard';
import {SimpleGrid,Box} from "@chakra-ui/react"
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      <SimpleGrid column={}={[1,2,3,4,5,6]} gap={5}>
      {
        products.map((el)=>(
          <Box>
      <Productcard {...el}/>
          </Box>
        ))
      }
      </SimpleGrid>
    </div>
  );
}

export default ProductList;
