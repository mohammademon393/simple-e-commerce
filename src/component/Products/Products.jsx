import { use, useState } from "react";
import Product from "../Product/Product";
import './Products.css';

const Products = ({ productsData }) => {
    const products = use(productsData);
    const [addProducts, setAddProducts] = useState([])
    // console.log(products);
    
    const handleProducts = (product) =>{
        const newProducts = [...addProducts, product];
        setAddProducts(newProducts)
        // console.log(newProducts);
        
        
    }


  return (
    <div>
      <h1>Products...</h1>

      <ol>
        {addProducts.map((addProduct) => (
          <li key={addProduct.id}>{addProduct.title}</li>
        ))}
      </ol>

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