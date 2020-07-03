import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductList from './ProductList';


const Routes = () => (
  <Switch>
    <Route exact path="/products/:id">
      <p>product detail</p>
    </Route>
    <Route exact path="/cart">
      <p>Cart</p>
    </Route>
    <Route exact path="/">
      <ProductList />
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;