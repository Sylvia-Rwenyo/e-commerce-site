import React from 'react'
import Home from './home.js'
import Shop from './shop.js';
import Cart from './cart.js';
import Checkout from './checkout.js';
import Register from './register.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
const [show, setShow] = useState(true);

  return (
   <BrowserRouter>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="checkout" element={<Checkout/>}/>
    <Route path="register" element={<Register/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
