import React from 'react';
import Productcard from './productcard';
import {Grid,gr} from "@chakra-ui/react"
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      <Grid column={4} gap={10}>
      {
        products.map((el)=>(
          <>
      <Productcard {...el}/>
          </>
        ))
      }
      </Grid>
    </div>
  );
}

export default ProductList;
