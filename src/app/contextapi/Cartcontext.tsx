"use client";

import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define Product Type
interface Product {
  slug: string;
  heading: string;
  price: string;
  image: string;
  quantity : number;
}

// Define State Type
interface CartState {
  cart: Product[];
}

// Define Actions
type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: string };

// Initial State
const initialState: CartState = {
  cart: [],
};

// Reducer Function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Prevent duplicate products from being added
      const isAlreadyInCart = state.cart.some((item) => item.slug === action.payload.slug);
      if (isAlreadyInCart) return state;
      return { ...state, cart: [...state.cart, action.payload] };

    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((item) => item.slug !== action.payload) };

    default:
      return state;
  }
};

// Create Context
const CartContext = createContext<{state: CartState; dispatch: React.Dispatch<CartAction>;}>
({ state: initialState, dispatch: () => null });

// Cart Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => useContext(CartContext);
