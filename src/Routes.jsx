import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import ItemsList from './ItemsList';
import ItemDetail from './ItemDetail';
import Cart from './Cart';

function Routes() {
    return (
      <Switch>
        <Route exact path="/"><ItemsList/></Route>
        <Route exact path="/products/:id"><ItemDetail /></Route>
        <Route exact path="/cart"><Cart /></Route>
       
        
        {/* <Route><h1>NOT FOUND!!!</h1></Route> */}
        <Redirect to="/" />
      </Switch>
    );
  }
  
  export default Routes;
  