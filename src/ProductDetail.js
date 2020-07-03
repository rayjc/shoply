import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './reducers/actions';
import './ProductDetail.css';


const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  const { name, image_url, price, description } = products[id];
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart(id, quantity));
    setQuantity(1);
  }

  return (
    <div className="ProductDetail">
      <h3>{name}</h3>
      <div className="ProductDetail-container">
        <img src={image_url} alt={name} />
      </div>
      <h4>{description}</h4>
      <h4>$ {price}</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity-input">Quantity:</label>
        <input id="quantity-input" type="number" min="1" max="100"
          value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  )
}


export default ProductDetail;