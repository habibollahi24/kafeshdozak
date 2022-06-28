import React, { createContext, useContext, useReducer } from "react";

//Reducer
const initialState = {
  cart: [],
  total: 0,
  offTotal: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cartClone = [...state.cart];
      const incrementedProductIndex = cartClone.findIndex((product) => product._id === action.payload._id);
      if (incrementedProductIndex < 0) {
        cartClone.push({ ...action.payload, quantity: 1 });
      } else {
        const repetedIncrementedProduct = cartClone[incrementedProductIndex];
        repetedIncrementedProduct.quantity++;
      }
      return {
        ...state,
        cart: cartClone,
        total: state.total + action.payload.price,
        offTotal: state.offTotal + action.payload.offPrice,
      };
    }
    case "DECREMENT": {
      const cloneCart = [...state.cart];
      const findedIndex = cloneCart.findIndex((p) => p._id === action.payload._id);
      const qty = cloneCart[findedIndex].quantity;
      if (qty > 1) {
        //Decrease one product
        cloneCart[findedIndex].quantity--;
        return {
          ...state,
          cart: cloneCart,
          total: state.total - action.payload.price,
          offTotal: state.offTotal - action.payload.offPrice,
        };
      } else {
        //remove product
        const removeProduct = cloneCart.filter((p) => p._id !== action.payload._id);
        return {
          ...state,
          cart: removeProduct,
          total: state.total - action.payload.price,
          offTotal: state.offTotal - action.payload.offPrice,
        };
      }
    }
    case "INCREMENT": {
      const cloneCart = [...state.cart];
      const findedIndex = cloneCart.findIndex((p) => p._id === action.payload._id);
      cloneCart[findedIndex].quantity++;
      return {
        ...state,
        cart: cloneCart,
        total: state.total + action.payload.price,
        offTotal: state.offTotal + action.payload.offPrice,
      };
    }
    default:
      return state;
  }
};
//
//context
const CartProvider = createContext();
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartProvider.Provider value={{ state, dispatch }}>{children}</CartProvider.Provider>;
};
//
//custom Hook
export const useCart = () => useContext(CartProvider);

export default CartContext;
