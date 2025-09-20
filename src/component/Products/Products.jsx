import { use } from "react";
import Product from "../Product/Product";
import './Products.css';

const Products = ({ productsData }) => {
    const products = use(productsData);
    // console.log(products);
    
  return (
    <div>
      <h1>Products...</h1>

      <div className="card-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;