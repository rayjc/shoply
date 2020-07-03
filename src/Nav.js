import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Nav.css';

const Nav = () => {
  const cart = useSelector(state => state.cart);

  return (
    <nav className="Nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart({cart.length})</NavLink>
    </nav>
  );
}


export default Nav;