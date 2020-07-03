import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';


const Routes = () => (
  <Switch>
    <Route exact path="/products/:id">
      <ProductDetail />
    </Route>
    <Route exact path="/cart">
      <Cart />
    </Route>
    <Route exact path="/">
      <ProductList />
    </Route>
    <Redirect to="/" />
  </Switch>
)


export default Routes;