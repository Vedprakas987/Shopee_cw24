import React from 'react';
import Productcard from './productcard';
import { SimpleGrid,Box} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <SimpleGrid column={{base:2,sm:2,md:3,lg:4,xl:5,"2xl":6}} gap={6}>
    {
        products.map((el)=>
        (
        <B>
            <Productcard key={el.price} {...el}/>
        </B>
        )
        )
    }
      </SimpleGrid>
          
         
    );
}

export default ProductList;