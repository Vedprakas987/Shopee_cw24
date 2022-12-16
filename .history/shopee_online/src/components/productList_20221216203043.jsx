import React from 'react';
import Productcard from './productcard';
import {SimpleGrid,Box,Card, GridItem} from '@chakra-ui/react'
const ProductList = ({products}) => {
    console.log(products)
    return (
        <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} gap={5}>
        <Box>
           <Text as='h5' isTruncated fontWeight='bold' fontSize='large'>
             {note.title}
           </Text>
           <Text>{note.text}</Text>
         </Box>
     </SimpleGrid>
        <SimpleGrid column={{base:1,sm:1,md:2,lg:2,xl:2,"2xl":2}} gap={6}>
 
      </SimpleGrid>
          
         
    );
}

export default ProductList;
