import React from 'react';
import Productcard from './productcard';
import {Grid,GridItem} from "@chakra-ui/react"
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      <Grid grid>
      {
        products.map((el)=>(
          <GridItem>
      <Productcard {...el}/>
          </GridItem>
        ))
      }
      </Grid>
    </div>
  );
}

export default ProductList;
