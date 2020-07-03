import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import cartReducer from './cartReducer';


test('initial/default dispatch', () => {
  const state = cartReducer([], { type: '' });
  expect(state).toEqual([]);
})

describe('ADD_TO_CART', () => {
  test('add a new item', () => {
    const state = cartReducer([], { type: ADD_TO_CART, payload: { id: 100, quantity: 2 } });
    expect(state).toEqual([{ id: 100, quantity: 2 }]);
  })

  test('add an existing item', () => {
    const state = cartReducer([{ id: 1, quantity: 1 }], { type: ADD_TO_CART, payload: { id: 1, quantity: 2 } });
    expect(state).toEqual([{ id: 1, quantity: 3 }]);
  })

  test('is a pure action; returns a new cart array', () => {
    const initialState = [{ id: 1, quantity: 1 }];
    const state = cartReducer(initialState, { type: ADD_TO_CART, payload: { id: 1, quantity: 2 } });
    expect(initialState).not.toBe(state);
    expect(state).toEqual([{ id: 1, quantity: 3 }]);
  })
})


describe('REMOVE_FROM_CART', () => {
  const initialState = [
    { id: 1, quantity: 1 },
    { id: 2, quantity: 2 },
  ]

  test('remove an item entirely', () => {
    const state = cartReducer(initialState, { type: REMOVE_FROM_CART, payload: { id: 1, quantity: 1 } });
    expect(state).toEqual([{ id: 2, quantity: 2 }]);
  })

  test('remove an item partially; subtract quantity', () => {
    const state = cartReducer(initialState, { type: REMOVE_FROM_CART, payload: { id: 2, quantity: 1 } });
    expect(state).toEqual([
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
    ]);
  })

  test('is a pure action; returns a new cart array', () => {
    const state = cartReducer(initialState, { type: REMOVE_FROM_CART, payload: { id: 1, quantity: 1 } });
    expect(state).not.toBe(initialState);
    expect(state).toEqual([{ id: 2, quantity: 2 }]);
  })
})