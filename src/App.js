import React, { useState } from 'react';
import './App.css';
import './Normalize.css';
import Products from './components/Products.js';

function App() {

  
  return (
    <div className="App">
      <h1 style={{textAlign: "left", marginBottom: "8px", color: "hsl(14, 65%, 9%)"}}>Desserts</h1>
      <Products />
    </div>
  );
}

export default App;
