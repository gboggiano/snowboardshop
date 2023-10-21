import React from "react";
import "./style.css";
import { useContext } from "react";
import { ContextCollection } from "../../context/ContextCollection";
import Buttonone from "../../Test/Button-one/Buttonone";

export default function ProdcardBox({ prod }) {
  const { collection, setCollection, saveLS } = useContext(ContextCollection);
  return (
    <div className="snowcardscontainer">
      <img className="snowcardimgcustom" src={prod.image} alt={prod.title} />
      <h3 className="snowcardtitlecustom">{prod.title}</h3>
      <p className="snowcardtitlecustom"> {prod.brand}</p>
      <p className="snowcardtitlecustomP"> {prod.price + " USD"}</p>
      <Buttonone
        title="Add to Cart"
        className="btn btn-success"
        funcion={() => setCollection((prevState) => [...prevState, prod.id])}
        // funcion={() => saveLS([prod])}
      />
    </div>
  );
}
