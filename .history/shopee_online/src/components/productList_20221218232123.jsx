import React from 'react';
import Productcard from './productcard';
const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      {
        products.map((el)=>(
        <Pro
        ))
      }
    </div>
  );
}

export default ProductList;
