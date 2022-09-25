import { faArrowRight, faArrowRightArrowLeft, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {


    // cart.map(product => console.log(product.price))
    const total = cart.reduce((x, y) => x + y.price, 0)
    const totalShippingCharge = 0
    const tax = total / 10
    const grandTotal = total + totalShippingCharge + tax


    return (
        <div className='cart'>
            <h3 className='heading'>Order Summary</h3>
            <div className='cart-details'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping Charge: ${totalShippingCharge}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            </div>
            <div className="buttons">
                <button className='clear-cart-btn'>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
                <button className='review-ordar-btn'>
                    <span>Review Order</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};


export default Cart;