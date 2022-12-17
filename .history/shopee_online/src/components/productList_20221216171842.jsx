import React from 'react';
import Productcard from './productcard';
import { Container,Grid,GridItem } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Grid templateColumns={[1]} gap={6}>
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
