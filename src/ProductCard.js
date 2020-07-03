import React from 'react';
import './ProductCard.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './reducers/actions'

const ProductCard = ({ id, name, imgUrl }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart(id));
  }

  return (
    <div className="ProductCard">
      <h3>{name}</h3>
      <div className="ProductCard-container">
        <img src={imgUrl} alt={name} />
      </div>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}


export default ProductCard;