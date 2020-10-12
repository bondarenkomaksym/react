import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  // console.log(rest);
  const { productId } = useParams();
  return (
    <div className="product" >
      {`Product is a ${productId}`}
    </div>
  )

};

export default Product;