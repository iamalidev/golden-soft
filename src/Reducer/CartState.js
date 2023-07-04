import { useReducer } from "react";
import mainReducer from "./CartReducer";
import {
  ADD_TO_CART,
  ADD_TO_LIKE,
  REMOVE_FROM_CART,
  REMOVE_FROM_LIKE,
} from "./types";
import MainContext from "../context/CartContext";

const CartState = ({ children }) => {
  const initialState = {
    cartItems: [],
    likeItems: [],
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const addToCart = (el) => dispatch({ type: ADD_TO_CART, payload: el });

  const removeFromCart = (id) =>
    dispatch({ type: REMOVE_FROM_CART, payload: id });

  const addToLike = (el) => dispatch({ type: ADD_TO_LIKE, payload: el });

  const removeFromLike = (id) =>
    dispatch({ type: REMOVE_FROM_LIKE, payload: id });

  return (
    <MainContext.Provider
      value={{
        cartItems: state.cartItems,
        likeItems: state.likeItems,
        addToCart,
        removeFromCart,
        addToLike,
        removeFromLike,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default CartState;
