import React from 'react';
import Productcard from './productcard';
import { Grid, GridItem } from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Grid templateColumns={4} gap={6}>
        
                {
            products.map((el)=>{
                console.log(el)
                return(
                    <GridItem>
                    <Productcard {...el}/>
                    </GridItem>
                )
            })
           }
      
      </Grid>
          
         
    );
}

export default ProductList;