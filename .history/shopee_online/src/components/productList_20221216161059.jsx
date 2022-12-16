import React from 'react';
import Productcard from './productcard';
const ProductList = (products) => {
    return (
        <div>
            {products.map((el)=>(
                <Productcard key={el.id} {...el}/>
            ))}
        </div>
    );
}

export default ProductList;