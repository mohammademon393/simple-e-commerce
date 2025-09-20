import './Product.css';

const Product = ({ product }) => {
    console.log(product);
    
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
        <button className='btn'>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;