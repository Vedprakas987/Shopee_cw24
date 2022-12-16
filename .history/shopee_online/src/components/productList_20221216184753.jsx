import React from 'react';
import Productcard from './productcard';
import { Grid,Box,Card, GridItem} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
    
        <div gridTemplateColumns="repeat 3 1fr" gap={4}>
    {
        products.map((el)=>
        (
        <GridItem>
            <Productcard key={el.price} {...el}/>
        </GridItem>
        )
        )
    }
      </d>
          
         
    );
}

export default ProductList;
