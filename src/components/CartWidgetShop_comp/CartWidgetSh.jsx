import React, { useState } from "react";
import cartshop from "../../Assets//shoppingcart.png";
import { useId } from "react";
import "./style.css";
import { useCart } from "../CustomHook-comp/useCart";
import { useContext } from "react";
import { Cartcontext } from "../../context/CartContext";
import { collection, getDocs, where, query, addDoc } from "firebase/firestore";
import { db } from "../..";
import Swal from "sweetalert2";

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

//-------------------------------------------------------------

export default function CartWidgetSh() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useContext(Cartcontext);
  const [newUser, setNewUser] = useState();
  const [showForm, setShowForm] = useState(true);
  const [docIds, setDocIds] = useState();

  const getTotal = (products) => {
    return products.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);
  };

  const total = getTotal(cart);

  //-----

  const finish = () => {
    const usersCollection = collection(db, "usuarios");
    addDoc(usersCollection, newUser)
      .then((docRef) => {
        const docId = docRef.id;
        console.log(docId);
        setDocIds(docId);
        Swal.fire(
          "Thanks so much for your order! your tracking number is: " +
            docId +
            " total USD$ : " +
            total
        );
      })
      .catch((error) => {
        console.log(error);
      });
    setShowForm(false);
  };

  //------

  const handleChange = (e) => {
    let obj = { name: "test1", tel: 0, mail: "example@test.com" };
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log();
    console.log({ ...newUser, [e.target.name]: e.target.value });
  };

  //-------

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
          <p>{total} $USD</p>
          <button className="btn btn-dark" onClick={clearCart}>
            Clear
          </button>
          {showForm && (
            <>
              <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
              ></input>
              <label>Tel</label>
              <input
                type="text"
                name="tel"
                onChange={(e) => handleChange(e)}
              ></input>
              <label>Mail</label>
              <input
                type="text"
                name="mail"
                onChange={(e) => handleChange(e)}
              ></input>
              <input type="submit" onClick={finish} />
            </>
          )}
        </ul>
      </aside>
    </>
  );
}
