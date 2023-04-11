import React from 'react'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Card({item, addToCart}){
    const{name, price, quantity,id, image} = item;
    return(
                <div className="card">
                    <img src={image} alt="for sale"/>
                    <div>
                        <h5>{name}</h5>
                        <p>Ksh {price}</p>
                        <button className='btn add' onClick={() => addToCart(item)} >Add to Cart</button>
                    </div>
                </div>
    );
}

export default Card;