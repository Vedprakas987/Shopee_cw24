import React from 'react';
import Productcard from './productcard';
import {Grid,GridItem} from "@chakra-ui/react"
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      <Grid gridTemplateColumns={[1,2,3,4,5,6]} gap>
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
