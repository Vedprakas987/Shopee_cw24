import React from 'react';
import Productcard from './productcard';
import { Container,Grid,GridItem } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {
            products.map((el)=>{
                console.log(el)
                return(
                    <Grid
                    <Productcard {...el}/>
                )
            })
           }
      
      </Grid>
          
         
    );
}

export default ProductList;
