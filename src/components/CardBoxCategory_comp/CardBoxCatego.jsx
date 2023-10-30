import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function CardBoxCatego({ arti }) {
  return (
    <div className="cardscontainer">
      <h2 className="cardtitlecustom">{arti.title}</h2>
      <img className="cardimgcustom" src={arti.image} alt={arti.title} />
      <Link to={`/category/${arti.id}`}>
        <button className="btn btn-outline-warning customCategorybu2">
          Click to see the category
        </button>
      </Link>
    </div>
  );
}
