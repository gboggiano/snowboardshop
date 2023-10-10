import React from "react";
import "./style.css";

export default function Cardbox({ item }) {
  return (
    <div className="cardscontainer">
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
    </div>
  );
}
