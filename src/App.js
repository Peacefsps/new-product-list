import React, { useState } from 'react';
import './App.css';
import './Normalize.css';
import Products from './components/Products.js';

function App() {

  // const [cart, setCart] = useState([])

  // const addToCart = (product) => {
  //   setCart((prevCart) => [...prevCart, product]);
  // }
  return (
    <div className="App">
      <Products />
      {/* <Cart cart={cart} /> */}
    </div>
  );
}

export default App;
