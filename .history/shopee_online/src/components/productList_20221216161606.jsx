import React from 'react';
import Productcard from './productcard';
const ProductList = (products) => {
    console.log(products)
    return (
        <div>
           {
            products.map()
           }
        </div>
    );
}

export default ProductList;
