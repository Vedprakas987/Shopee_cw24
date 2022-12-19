import React from 'react';
import Productcard from './productcard';
import {SimpleGrid,Box} from "@chakra-ui/react"
import { Link } from 'react-router-dom';
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
       <SimpleGrid columns={[1,2,3,4,4]} gap={5}>
        {
        products.map((el)=>
        (
        <Box>
          <Link to=`/product/``>
            <Productcard key={el.id} {...el}/>
            </Link>
        </Box>
        )
        )
    }
    </SimpleGrid>
    </div>
  );
}

export default ProductList;
