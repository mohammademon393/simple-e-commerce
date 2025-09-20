import { use } from "react";
import Product from "../Product/Product";

const Products = ({ productsData }) => {
    const products = use(productsData);
    // console.log(products);
    
  return (
    <div>
      <h1>Products...</h1>
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;