import React from "react";
import "./style.css";

export default function Cardbox({ cate }) {
  console.log(cate);
  return (
    <div className="cardscontainer">
      <h2>{cate.title}</h2>
      <img src={cate.image} alt={cate.imagescate} />
    </div>
  );
}
