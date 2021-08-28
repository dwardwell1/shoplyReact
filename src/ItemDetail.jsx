import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
const {products} = require('./data.json');

function ItemDetail(){
   
    const {id} = useParams();    


    const dispatch = useDispatch();
    const cartAmount= useSelector(state => state[id], shallowEqual);
    const good = products[id];
    const addToCart = () => {
    console.log('add to cart', id);
    dispatch({type: 'ADD_TO_CART', payload: id});
        }
    const removeFromCart = () => {
    console.log('remove from cart', id);
    dispatch({type: 'REMOVE_FROM_CART', payload: id});
    }

    return (
        <div className="item" style={{outlineStyle:"solid"}}>
            {console.log("looking for the cart", cartAmount)}
            <h1>{good.name}</h1>
            <h3>${good.price}</h3>
            <img src={good.image_url} alt="" style={{width:"300px", height:"300px"}} />
            <p>{good.description}</p>
            <h3>In cart {cartAmount} times</h3>
            <p><button onClick={addToCart}>Add To cart</button>
            <button onClick={removeFromCart}>Remove from cart</button>
            </p>
        </div>
    );
}

export default ItemDetail;