import React, { useContext } from "react";
import { ContextCollection } from "../../context/ContextCollection";
import "./style.css";

export default function CartWidget() {
  const { collection, setCollection } = useContext(ContextCollection);
  console.log(collection.length);

  return (
    <div className="Cartbox">
      <section className="customwidgetcar">
        <button type="button" class="btn btn-primary position-relative">
          your Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {collection.length}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </section>
    </div>
  );
}
