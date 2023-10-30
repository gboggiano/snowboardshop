import React from "react";
import "./style.css";
import Categories from "../Category_comp/Categories";

export default function ItemListCointaner({ message }) {
  return (
    <div className="welcomemessagestyles">
      <section className="welcomemessagebox">
        <h2>{message}</h2>
      </section>
      <section className="customcategory">
        <Categories />
      </section>
    </div>
  );
}
