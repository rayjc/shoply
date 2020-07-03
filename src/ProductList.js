import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = () => {
  const catalog = useSelector(({ product }) => product);

  return (
    <div className="ProductList">
      {Object.entries(catalog).map(([id, product]) =>
        <ProductCard key={id} id={id} name={product.name} imgUrl={product.image_url} />
      )}
    </div>
  )
}


export default ProductList;