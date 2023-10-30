import { createContext, useState } from "react";
import React from "react";

export const Cartcontext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // setCart([...cart, product]);
    const productInCartindex = cart.findIndex((item) => item.id == product.id);

    if (productInCartindex >= 0) {
      const newCart = global.structuredClone(cart);
      newCart[productInCartindex].quantity += 1;
      return setCart(newCart);
    }

    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <Cartcontext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </Cartcontext.Provider>
  );
}
