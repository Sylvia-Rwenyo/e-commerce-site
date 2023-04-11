import React, {useState} from 'react'
import Home from './home.js'
import Shop from './shop.js';
import Cart from './cart.js';
import Checkout from './checkout.js';
import Register from './register.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if(cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += d;

    if(arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr])
}

  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path="shop" element={<Shop number={cart.length} addToCart={addToCart}/>}/>
    <Route path="cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
    <Route path="checkout" element={<Checkout/>}/>
    <Route path="register" element={<Register/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
