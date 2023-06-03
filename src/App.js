import React, { useState, useEffect } from 'react';
import Home from './home.js';
import Shop from './shop.js';
import Cart from './cart.js';
import Checkout from './checkout.js';
import Register from './register.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './load.js';

function App() {
  const [cart, setCart] = useState([]);
  const [loaded, setLoaded] = useState(false); // Define and set the value of 'loaded' state

  const addToCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    if (cart.length < 1) {
      // Update the visibility of the badge using state
      // Example: setBadgeVisible(false);
    }
    setCart([...arr]);
  };

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoaded(true);
    }, 2000); // Set the loaded state to true after 2 seconds (adjust the delay based on your loading logic)
  }, []);

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop number={cart.length} addToCart={addToCart} />} />
            <Route path="cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
