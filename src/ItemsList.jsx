import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Item from './Item';
import CartCounter from './CartCounter';
const {products} = require('./data.json');



let cartKeys = Object.keys(products)

const ItemsList = () => {
  
    return (
        <div className="cart">
      
          <CartCounter />
         
           {cartKeys.map(key => (
            <div>
                <Item good={products[key]} product={key} />
            </div>
              
           ))}
               
         
             
        </div>
    )
}

export default ItemsList;
