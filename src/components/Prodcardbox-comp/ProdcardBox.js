import React from "react";
import "./style.css";

export default function ProdcardBox({ prod }) {
  return (
    <div className="snowcardscontainer">
      <img className="snowcardimgcustom" src={prod.image} alt={prod.title} />
      <h3 className="snowcardtitlecustom">{prod.title}</h3>
      <p className="snowcardtitlecustom"> {prod.brand}</p>
      <p className="snowcardtitlecustomP"> {prod.price}</p>
    </div>
  );
}
