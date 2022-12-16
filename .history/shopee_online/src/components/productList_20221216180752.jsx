import React from 'react';
import Productcard from './productcard';
import { Grid, GridItem } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
      <Container>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
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
      </Container>
          
         
    );
}

export default ProductList;
