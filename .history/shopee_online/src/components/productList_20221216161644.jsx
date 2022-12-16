import React from 'react';
import Productcard from './productcard';
const ProductList = (products) => {
    console.log(products)
    return (
        <div>
           {
            products.map((el)=>{
                return(
                    <Productcard />
                )
            })
           }
        </div>
    );
}

export default ProductList;
