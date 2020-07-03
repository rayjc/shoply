import { addToCart, removeFromCart } from './actions';


describe('addToCart action', () => {
  test('returns correct dispatch object with default quantity', () => {
    expect(addToCart(100)).toEqual({
      type: 'ADD_TO_CART', payload: { id: 100, quantity: 1 }
    })
  });

  test('returns correct dispatch object', () => {
    expect(addToCart(1, 10)).toEqual({
      type: 'ADD_TO_CART', payload: { id: 1, quantity: 10 }
    })
  });
});

describe('removeFromCart action', () => {
  test('returns correct dispatch object with default quantity', () => {
    expect(removeFromCart(100)).toEqual({
      type: 'REMOVE_FROM_CART', payload: { id: 100, quantity: 1 }
    })
  });

  test('returns correct dispatch object', () => {
    expect(removeFromCart(1, 10)).toEqual({
      type: 'REMOVE_FROM_CART', payload: { id: 1, quantity: 10 }
    })
  });
});
