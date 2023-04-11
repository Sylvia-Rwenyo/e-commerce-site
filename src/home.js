import React from 'react';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link} from "react-router-dom";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';

function Home(){
    return(
       <body>
            <div className="navBar">
                <div className="logo">
                    <h4>Tech</h4>
                </div>
                <div className="register">
                    <Link to="register"><h4>log in</h4></Link>
                    <Link to="register"><h4 className="sign">&nbsp;&nbsp;Sign up</h4></Link>
                </div>
            </div>
            <div className="body">
                <div className="content">
                    <h1>The Brand new Headset</h1>
                    <div className="CTA">
                        <button className="buy btn"><Link to="cart">Buy now</Link></button>
                        <button className="shop btn"><Link to="shop">Shop all</Link></button>
                    </div>
                </div>
                <div className="pic">
                    <img src={'https://cdn.pixabay.com/photo/2017/04/04/17/25/sony-2202301_640.jpg'} alt="for sale"/>
                </div>
            </div>
            <div className="footerSection">
                <h3>Tech</h3>
            <div className="footer">
                <div className="contactInfo">
                    <ul className="location">
                        <li><FaLocationArrow/>&nbsp;&nbsp;123 Street Someplace</li>
                        <li><a href="mailto:tech@moreTech.com"><FaEnvelope/>&nbsp;&nbsp;tech@moreTech.com</a></li>
                        <li><a href="tel:+254111111111"><FaPhone/>&nbsp;&nbsp;+254111111111</a></li>
                    </ul>
                    <h6>Tech&#169;2023</h6>
                </div>
                <div className="about">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="socials">
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

export default Home;