import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';


function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // check if item already exists in cart
      const dupItem = state.find(item => item.id === action.payload.id);
      if (dupItem) {
        // a new cart array with quantity of duplicated item increased
        return state.map(item => {
          if (item.id === dupItem.id) {
            item.quantity += action.payload.quantity;
          }
          return item;
        })
      } else {
        // a new cart array with new item appended
        return [...state, action.payload];
      }

    case REMOVE_FROM_CART:
      return state.reduce((cart, item) => {
        if (item.id !== action.payload.id) {
          // simply add other items to cart array
          cart.push({ ...item });
        } else if (item.quantity - action.payload.quantity > 0) {
          const newItem = { ...item };
          // add removed item to cary array if remaining quantity > 0
          newItem.quantity -= action.payload.quantity;
          cart.push(newItem);
        }
        return cart;
      }, []);

    default:
      return state;
  }
}


export default cartReducer;