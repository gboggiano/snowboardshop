import { createContext, useState, useContext } from "react";
import React from "react";

export const Cartcontext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    {
      const isInArray = cart.indexOf(item) !== -1;

      console.log(item);

      if (isInArray) {
        const productInCartindex = cart.filter(
          (product) => product.title === item.title
        );
        productInCartindex[0].quantity += 1;
        setCart([...cart]);
      } else {
        setCart((prevState) => [...prevState, { ...item, quantity: 1 }]);
      }
    }
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
