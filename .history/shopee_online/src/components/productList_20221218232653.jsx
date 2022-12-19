import React from 'react';
import Productcard from './productcard';
import {Grid,Griditem} from "@chakra-ui/react"
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      <Grid column={4} gap=>
      {
        products.map((el)=>(
          <Griditem>
      <Productcard {...el}/>
          </Griditem>
        ))
      }
      </Grid>
    </div>
  );
}

export default ProductList;
