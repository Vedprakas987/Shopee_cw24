import React from 'react';
import Productcard from './productcard';
import {Grid,GridItem} from "@chakra-ui/react"
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      < gridTemplateColumns={[1,2,3,4,5,6]} gap={5}>
      {
        products.map((el)=>(
          <GridItem>
      <Productcard {...el}/>
          </GridItem>
        ))
      }
      </>
    </div>
  );
}

export default ProductList;
