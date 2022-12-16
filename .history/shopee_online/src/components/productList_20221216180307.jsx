import React from 'react';
import Productcard from './productcard';
import { Grid, GridItem } from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
      
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
    {
        <GridItem w='100%' h='10' bg='blue.500'></GridItem>
      </Grid>
          
         
    );
}

export default ProductList;
