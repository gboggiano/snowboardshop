import React from "react";
import "./style.css";

export default function CartWidget() {
  return (
    <div className="Cartbox">
      <section className="customwidgetcar">
        <button type="button" class="btn btn-primary position-relative">
          your Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            8<span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </section>
    </div>
  );
}
