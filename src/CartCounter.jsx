import React from 'react';
import {  useSelector, shallowEqual } from 'react-redux';
import {Link} from 'react-router-dom';

function CartCounter() {
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b);
    const cartAmount = useSelector(state => state, shallowEqual);
    const numbers = sumValues(cartAmount);

    return (
        <div className="cart-counter">
            <span> Your cart is {numbers} thick</span>
            <Link to="/cart" > See Cart </Link>
        </div>
    );
}

export default CartCounter;