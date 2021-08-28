
import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import Item from './Item';
import CartCounter from './CartCounter';
const {products} = require('./data.json');

function Cart() {
    
    const cart = useSelector(state => state, shallowEqual);
   const cartArray = []
    for( const property in cart){
        if (cart[property] > 0) {
            cartArray.push(property)}
            console.log(cartArray)
        };
    

    return (
        <div className="">
            <h2>Your Cart</h2>
            {cartArray.map(item => (
                <Item product={item} good={products[item]} />))}
            
        </div>
    );
}

export default Cart;