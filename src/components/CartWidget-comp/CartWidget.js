import React from "react";
import "./style.css";

export default function CartWidget() {
  return (
    <div className="Cartbox">
      <section>
        <button type="button" class="btn btn-primary position-relative">
          your Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1<span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </section>
    </div>
  );
}
