import React from "react";
import "./style.css";
import Category from "../Categorybox-comp/Category";

export default function ItemlistContainer({ message }) {
  return (
    <div className="welcomemessagestyles">
      <section className="welcomemessagebox">
        <h2>{message}</h2>
      </section>
      <section className="customcategory">
        <Category />
      </section>
    </div>
  );
}
