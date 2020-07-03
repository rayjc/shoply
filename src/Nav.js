import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Nav.css';

const Nav = () => {
  const cart = useSelector(state => state.cart);
  const numItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="Nav">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/cart">Cart({numItems})</NavLink>
    </nav>
  );
}


export default Nav;