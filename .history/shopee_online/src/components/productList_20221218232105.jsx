import React from 'react';

const ProductList = ({products=[]}) => {
  console.log(products)
  return (
    <div>
      {
        products.map((el))
      }
    </div>
  );
}

export default ProductList;
