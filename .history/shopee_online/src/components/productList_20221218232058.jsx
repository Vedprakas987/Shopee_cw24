import React from 'react';

const ProductList = ({products=[]}) => {
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
