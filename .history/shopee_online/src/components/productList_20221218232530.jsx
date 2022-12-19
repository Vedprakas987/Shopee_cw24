import React from 'react';
import Productcard from './productcard';
import {Grid,Griditem} from "@chakra-ui/react"
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      <Grid>
      {
        products.map((el)=>(
        <Productcard {...el}/>
        ))
      }
    </div>
  );
}

export default ProductList;
