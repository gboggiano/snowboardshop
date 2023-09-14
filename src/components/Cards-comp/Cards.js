import React from "react";
import "./style.css";

export default function Cards({ title, brand, price, category, description }) {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{brand}</p>
      <p>{price}</p>
      <p>{category}</p>
      <p>{description}</p>
    </div>
  );
}
