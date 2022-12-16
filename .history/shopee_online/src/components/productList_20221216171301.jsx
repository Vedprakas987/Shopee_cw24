import React from 'react';
import Productcard from './productcard';
import { Container,Grid } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Container>
            <
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