
import { Suspense } from 'react'
import './App.css'
import Products from './component/Products/Products'

function App() {

  const productsData = fetch("https://fakestoreapi.com/products")
  .then(res => res.json())


  


  return (
    <>
      <h1>Simple E-Commerce with react</h1>
      <Suspense fallback={<p>Data commit soon...</p>}>
        <Products productsData={productsData}></Products>
      </Suspense>
    </>
  );
}

export default App
