import './Product.css';

const Product = ({ product }) => {
    console.log(product);
    
  return (
    <div className='card-container'>
      <div className="card">
        <img className='img' src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;