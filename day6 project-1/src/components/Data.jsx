import React from 'react';
import './Data.css';

function Data({ arr }) {
  return (
    <div className="data-container">
      {arr.map((item) => (
        <div key={item.id} className="product">
          <div className="product-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="product-details">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <div className="product-buttons">
              <button className="btn add-cart">Add to Cart</button>
              <button className="btn buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data;
