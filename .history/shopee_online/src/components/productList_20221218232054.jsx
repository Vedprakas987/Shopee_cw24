import React from 'react';

const ProductList = ({products=[]}) => {
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
