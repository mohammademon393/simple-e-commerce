import { useState } from 'react';
import './Product.css';

const Product = ({ product, handleProducts }) => {
//   console.log(product);
  const [cart, setCart] = useState(false);

  const hendleCart = () => {
    setCart(!cart);
    handleProducts(product);
  };

  return (
    <div className="card-container2">
      <div className="card">
        <div className="img-container">
          <img className="img" src={product.image} alt="" />
        </div>
        <h3>{product.title}</h3>
        <p>Price: {product.price} </p>
        <p>category: {product.category}</p>
        <p>rating: {product.rating.rate}</p>
        <button onClick={hendleCart} className={`btn ${cart && "btn2"}`}>
          {cart ? "Complate" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;