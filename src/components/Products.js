import React, { useState } from 'react';
import '../styles/products.css';
import data from '../data.json';
import Cart from "../components/Cart.js";

export default function Products() {
  const [displayButton, setDisplayButton] = useState({});
  const [cart, setCart] = useState([]);
  const [products] = useState(data);
  console.log(products);

  const handleAddProduct = (productId) => {
    setDisplayButton((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }))

    const existingProduct = cart.find((item) => item.product.id === productId);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product: products.find(p => p.id === productId), quantity: 1 }]);
    }
  };

  const handleDecrement = (product) => {
    const existingProduct = cart.find((item) => item.product.id === product.id);

    setDisplayButton((prevButton) => ({
      ...prevButton,
      quantity: Math.max(prevButton.quantity - 1, 0)
    }))

    if (existingProduct && existingProduct.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.product.id !== product.id));
      setDisplayButton((prevState) => ({
        ...prevState,
        [product.id]: false
      }))
      }
  };

  const handleIncrement = (product) => {
    setCart(
      cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  
  return (
    <div className="Product">
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image.desktop}
              alt={product.name}
              className="img-box"
            />
            <div className="product-description">
              <h2>{product.name}</h2>
              <h3>{product.category}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <button
              className="addtocart"
              onClick={() => handleAddProduct(product.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <g fill="#C73B0F" clipPath="url(#a)">
                  <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                  <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.333 0h20v20h-20z" />
                  </clipPath>
                </defs>
              </svg>
              <span>Add to Cart</span>
            </button>
            {displayButton[product.id] && (
              <button className="onclick-btn">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="2"
                    fill="none"
                    viewBox="0 0 10 2"
                    onClick={() => handleDecrement(product)}
                  >
                    <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                  </svg>
                </div>
                <span>
                  {cart.find((item) => item.product.id === product.id)
                    ?.quantity || 0}
                </span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="none"
                    viewBox="0 0 10 10"
                    onClick={() => handleIncrement(product)}
                  >
                    <path
                      fill="#fff"
                      d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                    />
                  </svg>
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
      <Cart setDisplayButton={setDisplayButton} displayButton={displayButton} cart={cart} setCart={setCart} products={products} />
    </div>
  );
}