import data from "../data.json";


function productReducer(state = data.products, action) {
  switch (action.type) {
    default:
      return state;
  }
}


export default productReducer;