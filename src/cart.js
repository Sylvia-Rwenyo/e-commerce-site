import React, {useEffect, useState} from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Checkout from './checkout.js';
import { Link} from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';

const [cart, setCart] = useState([]);
const [show, setShow] = useState(true);
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
  

function Cart({cart, setCart, handleChange}){
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.quantity * item.price));
        setPrice(ans);
    }

    useEffect(() => {
        handlePrice();
    });

    return(
       <body>
            <div class="navBarCart">
                <div class="header">
                    <h4>Cart</h4>
                </div>
                <div class="cartIcon">
                <button><FaShoppingCart/><span class="badge">2</span></button>
                </div>
            </div>
            <div class='cartBody'>
                <div class="cartItems">
                {(cart.map((item) =>(
                    <div class="cartItem">
                        <img src={item.image} alt="item for sale"/>
                        <div class="info">
                            <h6>Headphones</h6>
                            <div class="amount">
                                <button class="add" onClick={() => handleChange(item, 1)}>-</button>
                                <button class="number">{item.quantity}</button>
                                <button class="subtract" onClick={() => handleChange(item, -1)}>+</button>
                            </div>
                            <p>Ksh 2500</p>
                            <div class="delete" onClick={() => handleRemove(item.id)}><FaTrash/></div>
                        </div>
                        <div class="details">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                             inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                )))}
                </div>
                <div class="total">
                    <div class="figures">
                        <h5>Total:</h5>
                        <h5 class="cash">Ksh {price}</h5>
                    </div>
                    <Link to="checkout"><button class="btn checkout" >Checkout</button></Link>
                </div>
            </div>
            <div class="footerSection">
            <h3>Tech</h3>
        <div class="footer">
            <div class="contactInfo">
                <ul class="location">
                    <li><FaLocationArrow/>&nbsp;&nbsp;123 Street Someplace</li>
                    <li><a href="mailto:tech@moreTech.com"><FaEnvelope/>&nbsp;&nbsp;tech@moreTech.com</a></li>
                    <li><a href="tel:+254111111111"><FaPhone/>&nbsp;&nbsp;+254111111111</a></li>
                </ul>
                <h6>Tech&#169;2023</h6>
            </div>
            <div class="about">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="socials">
                <ul>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                    <li><FaLinkedin/></li>
                </ul>
                <h6>more tech for you</h6>
            </div>
        </div>
        </div>
       </body>
    );
}

export default Cart;