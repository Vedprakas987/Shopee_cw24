import React from 'react';
import Productcard from './productcard';
const ProductList = (products) => {
    return (
        <div>
            {products.map((el)=>(
                <Productcard key={/>
            ))}
        </div>
    );
}

export default ProductList;
