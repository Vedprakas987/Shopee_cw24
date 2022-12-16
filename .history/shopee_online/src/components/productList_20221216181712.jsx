import React from 'react';
import Productcard from './productcard';
import { Grid, GridItem } from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Grid column={{base:1,sm:2,md:3,lg:4,xl:5,"2xl":}} gap={6}>
    {
        products.map((el)=>
        (
        <GridItem>
            <Productcard key={el.price} {...el}/>
        </GridItem>
        )
        )
    }
      </Grid>
          
         
    );
}

export default ProductList;
