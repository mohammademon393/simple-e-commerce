
const Product = ({ product }) => {
    console.log(product);
    
  return (
    <div>
      <div className="card">
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Product;