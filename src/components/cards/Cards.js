import React from "react";
import "./style.css";

export default function Cards({ title }) {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <h4>Brand</h4>
      <h4>Price</h4>
      <h4>Category</h4>
      <h4>Description</h4>
    </div>
  );
}
