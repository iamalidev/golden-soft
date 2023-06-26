import { useReducer } from "react";
import mainReducer from "./CartReducer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
import MainContext from "./CartContext";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const addToCart = (el) => dispatch({ type: ADD_TO_CART, payload: el });

  const removeFromCart = (id) =>
    dispatch({ type: REMOVE_FROM_CART, payload: id });

  return (
    <MainContext.Provider
      value={{ cartItems: state.cartItems, addToCart, removeFromCart }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default CartState;
