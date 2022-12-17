import React from 'react';
import Productcard from './productcard';
const ProductList = (products) => {
    return (
        <div>
            {products.map((el)=>(
                <Productcard key={el.id} image={el.flash_li_img src} />
            ))}
        </div>
    );
}

export default ProductList;
