import React from 'react';
import Productcard from './productcard';
import { Grid,Box,Card} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Grid gridTemplateColumns="repeat 3 1fr" spacing={6}>
    {
        products.map((el)=>
        (
        <Grid>
            <Productcard key={el.price} {...el}/>
        </Grid>
        )
        )
    }
      </>
          
         
    );
}

export default ProductList;
