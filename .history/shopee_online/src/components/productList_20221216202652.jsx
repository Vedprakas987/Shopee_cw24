import React from 'react';
import Productcard from './productcard';
import { Grid,Box,Card, GridItem} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
    
        <Grid templateColumns={{base:1,sm:1,md:2,lg:2,xl:2}} gap={6}>
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
