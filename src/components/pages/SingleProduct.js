import React from "react";
import { useParams } from "react-router-dom";
import ProductsList from "../../data/ProductsList";

const SingleProduct = () => {
    const params = useParams();

    const product = ProductsList.filter(item=>  item.id === parseInt(params.id))
    console.log(product)
  return (
    <div>
      {/* <h1> {params.id}</h1> */}

<h1>{product[0].id}</h1>
<h1>{product[0].name}</h1>
<h1>{product[0].price}</h1>

    </div>
  );
};

export default SingleProduct;
