import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';


const Cart = () => {
  const cart = useSelector(state => state.cart);

  if (cart.length === 0) {
    return (
      <div className="Cart">
        <h2 style={{ fontStyle: 'italic' }}>Nothing in your cart yet!</h2>
      </div>
    )
  }

  return (
    <div className="Cart">
      {cart.map(item => <CartItem key={item.id} id={item.id} quantity={item.quantity} />)}
    </div>
  )
}


export default Cart;