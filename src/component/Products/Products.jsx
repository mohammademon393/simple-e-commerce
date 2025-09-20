import { use, useState } from "react";
import Product from "../Product/Product";
import './Products.css';

const Products = ({ productsData }) => {
    const products = use(productsData);
    const [addProducts, setAddProducts] = useState([])
    // console.log(products);
    
    const handleProducts = (product) =>{
        console.log();
        
    }


  return (
    <div>
      <h1>Products...</h1>

      <div className="card-container">
        {products.map((product) => (
          <Product
            key={product.id}
            handleProducts={handleProducts}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;