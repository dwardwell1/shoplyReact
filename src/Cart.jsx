import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Item from './Item';

import { v4 as uuidv4 } from 'uuid';

const {products} = require('./data.json');

let cartArray = Object.entries(products)

let realCart = cartArray

const Cart = () => {
    return (
        <div className="cart">
      
          
         
           {realCart.forEach(product => {
              {console.log(product)}
               <p>test </p>
              })}
               
         
             
        </div>
    )
}

export default Cart;
