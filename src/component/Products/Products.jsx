import { use, useState } from "react";
import Product from "../Product/Product";
import './Products.css';

const Products = ({ productsData }) => {
    const products = use(productsData);
    const [addProducts, setAddProducts] = useState([]);
    const [image, setImage] = useState([]);
    // console.log(products);
    
    const handleProducts = (product) =>{
        const newProducts = [...addProducts, product];
        setAddProducts(newProducts)
        // console.log(newProducts);
    }

    const handleImg = (product) => {
        const newImage = [...image, product];
        setImage(newImage)
        
    }


  return (
    <div>
      <h1>Products...</h1>

      <div>
        {image.map((imgs) => (
          <img key={imgs.id} src={imgs.image} className="img"></img>
        ))}
      </div>

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
            handleImg={handleImg}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;