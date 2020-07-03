import data from "./data";


function productReducer(state = data.products, action) {
  switch (action.type) {
    default:
      return state;
  }
}


export default productReducer;