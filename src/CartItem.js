import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addToCart, removeFromCart } from './reducers/actions'
import { Link } from 'react-router-dom';
import './CartItem.css';


const CartItem = ({ id, quantity }) => {
  const catalog = useSelector(state => state.product, shallowEqual);
  const dispatch = useDispatch();
  const { name, image_url: imgUrl, price } = catalog[id];
  const [amount, setAmount] = useState(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity > amount) {
      // remove the extra amount from stored quantity
      dispatch(removeFromCart(id, quantity - amount))
    } else {
      // add more to stored quantity
      dispatch(addToCart(id, amount - quantity));
    }
  }

  return (
    <div className="CartItem">
      <Link to={`/products/${id}`}>
        <h3>{name}</h3>
        <div className="CartItem-container">
          <img src={imgUrl} alt={name} />
        </div>
      </Link>
      <h5>$ {(Math.round(quantity * price * 100) / 100).toFixed(2)}</h5>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount-input">Quantity:</label>
        <input id="amount-input" type="number" min="0" max="100"
          value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}


export default CartItem;