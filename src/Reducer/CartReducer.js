import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

const mainReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return "add";
    case REMOVE_FROM_CART:
      return "remove";
    default:
      return "hello";
  }
};

export default mainReducer;
