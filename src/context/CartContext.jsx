import { createContext, useState, useContext } from "react";
import React from "react";

export const Cartcontext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    {
      const productInCartindex = cart.find((product) => product.id === item.id);

      console.log(item);

      if (productInCartindex) {
        productInCartindex.quantity += 1;
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

// setCart([...cart, product]);
