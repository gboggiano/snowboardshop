import React from "react";
import "./style.css";
import Swal from "sweetalert2";
import Globalbutton from "../GlobalButton_comp/Globalbutton";
import { useCart } from "../CustomHook-comp/useCart";

export default function ProdCardsbox({ prod }) {
  const { cart, addToCart } = useCart();

  return (
    <div className="snowcardscontainer">
      <img className="snowcardimgcustom" src={prod.image} alt={prod.title} />
      <h3 className="snowcardtitlecustom">{prod.title}</h3>
      <p className="snowcardtitlecustom"> {"By:  " + prod.brand}</p>
      <p className="snowcardtitlecustomP"> {prod.price + " USD"}</p>
      <Globalbutton title={"Product Details"} description={prod.description} />
      <button
        className="btn btn-outline-primary customCategorybu"
        onClick={() => addToCart(prod)}
      >
        {" "}
        Add Product
      </button>
    </div>
  );
}
