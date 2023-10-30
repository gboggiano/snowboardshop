import { useContext } from "react";
import { Cartcontext } from "../../context/CartContext";

export const useCart = () => {
  const context = useContext(Cartcontext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
