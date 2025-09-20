import { use } from "react";

const Products = ({ productsData }) => {
    const products = use(productsData);
    console.log(products);
    
  return (
    <div>
      <h1>Products...</h1>
    </div>
  );
};

export default Products;