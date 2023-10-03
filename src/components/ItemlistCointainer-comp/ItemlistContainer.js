import React from "react";
import "./style.css";

export default function ItemlistContainer({ message }) {
  return (
    <div className="welcomemessagestyles">
      <section className="welcomemessagebox">
        <h2>{message}</h2>
      </section>
    </div>
  );
}
