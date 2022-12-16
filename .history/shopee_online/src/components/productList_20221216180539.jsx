import React from 'react';
import Productcard from './productcard';
import { Grid, GridItem } from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
      
        <Grid templateColumns={} gap={6}>
    {
        products.map((el)=>
        (
        <GridItem>
            <Productcard/>
        </GridItem>
        )
        )
    }
      </Grid>
          
         
    );
}

export default ProductList;
