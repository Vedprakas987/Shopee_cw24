import React from 'react';
import Productcard from './productcard';
import { Container,Grid } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Container>
            <Grid colo>
           {
            products.map((el)=>{
                console.log(el)
                return(
                    <Productcard {...el}/>
                )
            })
           }
           </Grid>
        </Container>
    );
}

export default ProductList;
