import React from 'react';
import Productcard from './productcard';
const ProductList = ({products}) => {
    console.log(products)
    return (
        <div>
           {
         products
           }
        </div>
    );
}

export default ProductList;
