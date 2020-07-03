import rootReducer from './rootReducer';
import { addToCart, removeFromCart } from './actions';
import { createStore } from 'redux';

const store = createStore(rootReducer);

test('stores product catalog', () => {
  expect(store.getState().product).toBeDefined();
})

test('dispatches addToCart', () => {
  const initialCount = store.getState().cart.length;
  store.dispatch(addToCart(1, 1));
  expect(store.getState().cart.length).toBe(initialCount + 1);
})

test('dispatches removeToCart', () => {
  store.dispatch(addToCart(10, 1));
  const initialCount = store.getState().cart.length;
  store.dispatch(removeFromCart(10, 1));
  expect(store.getState().cart.length).toBe(initialCount - 1);
})