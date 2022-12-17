import React from 'react';
import Productcard from './productcard';
import { Container } from '@chakra-ui/react';
const ProductList = ({products}) => {
    console.log(products)
    return (
        <div>
           {
            products.map((el)=>{
                console.log(el)
                return(
                    <Productcard {...el}/>
                )
            })
           }
        </div>
    );
}

export default ProductList;
