import React from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';


function Checkout(){
    return(
        <body>
            <div class="navBarCart">
                    <h4>Checkout</h4>
            </div>
            <div class='cartBody'>
                <div class="total">
                    <h5>Total:</h5>
                    <h5 class="cash">Ksh 4000</h5>
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

export default Checkout;