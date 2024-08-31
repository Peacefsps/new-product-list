import React, { useState } from 'react';
import '../styles/products.css';
import data from '../data.json';
import Cart from "../components/Cart.js";


// import Waffledesktop from '../images/Waffledesktop.jpg';
// import Waffletablet from "../images/Waffletablet.jpg";
// import Wafflemobile from "../images/Wafflemobile.jpg";

export default function Products() {
    const [displayButton, setDisplayButton] = useState(false)
    const [count, setCount] = useState(0);
    

    const handleAddProduct = () => {
        setDisplayButton(true)
    }
    const handleDecrement = () => {
        if (count <= 0) {
        setCount(0)
        }
        else {
            setCount(count - 1);
        }
        
    }
    const handleIncrement = () => {
      setCount(count + 1);
    };
    return (
      <div className="Product">
        <div className="product-container">
          {data.map((product, index) => (
            <div key={index}>
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
              <button className="addtocart" onClick={handleAddProduct}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <g fill="#C73B0F" clip-path="url(#a)">
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
              {displayButton && (
                <button className="onclick-btn">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="2"
                      fill="none"
                      viewBox="0 0 10 2"
                      onClick={handleDecrement}
                    >
                      <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
                    </svg>
                  </div>
                  <span>{count}</span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="none"
                      viewBox="0 0 10 10"
                      onClick={handleIncrement}
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
        <Cart />
      </div>
    );
}