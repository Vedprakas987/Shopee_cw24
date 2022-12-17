import React from 'react';
import Productcard from './productcard';
import { Container } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
        <Cont>
           {
            products.map((el)=>{
                console.log(el)
                return(
                    <Productcard {...el}/>
                )
            })
           }
        </Cont>
    );
}

export default ProductList;
