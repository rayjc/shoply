import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCart = (id, quantity = 1) => ({
  type: ADD_TO_CART, payload: { id, quantity }
});

export const removeFromCart = (id, quantity = 1) => ({
  type: REMOVE_FROM_CART, payload: { id, quantity }
})