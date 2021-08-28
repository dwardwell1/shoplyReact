import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Link } from "react-router-dom";
// import {rootReducer} from './rootReducer'

function Item({good, product}){
    
    const dispatch = useDispatch();
    const cartAmount = useSelector(state => state[product], shallowEqual);
const addToCart = () => {
    console.log('add to cart', product);
    dispatch({type: 'ADD_TO_CART', payload: product});
}
const removeFromCart = () => {
    console.log('remove from cart', product);
    dispatch({type: 'REMOVE_FROM_CART', payload: product});
}

    return (
        <div className="item" style={{outlineStyle:"solid"}}>
            {console.log("looking for the cart", cartAmount)}
            <h1>{good.name}</h1>
            <h3>${good.price}</h3>
            <Link to={`/products/${product}`}> <p>Show me More! </p><img src={good.image_url} alt="" style={{width:"100px", height:"100px"}} /></Link>
            
            <h3>In cart {cartAmount} times</h3>
            <p><button onClick={addToCart}>Add To cart</button>
            <button onClick={removeFromCart}>Remove from cart</button>
            </p>
        </div>
    );
}

export default Item