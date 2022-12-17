import React from 'react';
import Productcard from './productcard';
import { Container } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Container display={} gridColumn={[4,3,2,1]}>
           {
            products.map((el)=>{
                console.log(el)
                return(
                    <Productcard {...el}/>
                )
            })
           }
        </Container>
    );
}

export default ProductList;
