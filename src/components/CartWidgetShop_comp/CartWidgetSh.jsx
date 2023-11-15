import React from "react";
import cartshop from "../../Assets//shoppingcart.png";
import { useId } from "react";
import "./style.css";
import { useCart } from "../CustomHook-comp/useCart";
import { useContext } from "react";
import { Cartcontext } from "../../context/CartContext";

function CartItem({
  title,
  brand,
  price,
  image,
  quantity,
  prod,
  addToCart,
  clearCart,
}) {
  return (
    <li>
      <img className="customprodimg" src={image} alt={title} />
      <div>
        <strong>Tabla</strong> - ${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export default function CartWidgetSh() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useContext(Cartcontext);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <img className="customcartimage" src={cartshop} />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}

          <button onClick={clearCart}>Clear</button>
        </ul>
      </aside>
    </>
  );
}
