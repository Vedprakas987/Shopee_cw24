import React from 'react';
import Productcard from './productcard';
const ProductList = (products) => {
    console.log(products)
    return (
        <div>
           {
            products.products.map((el)=>{
                return(
                    <Productcard {...el}/>
                )
            })
           }
        </div>
    );
}

export default ProductList;
