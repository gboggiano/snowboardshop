import React from "react";
import Cardbox from "../Cardbox-comp/Cardbox";
import "./style.css";
import { useState, useEffect } from "react";
import data from "../items.json";

export default function Category() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(data)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  }, []);

  // const [catego, setItems] = useState([
  //   {
  //     title: "Snowboards",
  //     image: { ...new Image(board) },
  //   },
  //   {
  //     title: "Gear",
  //     image: { ...new Image(clothes1) },
  //   },
  //   {
  //     title: "Clothes and Apparel",
  //     image: { ...new Image(gear1) },
  //   },
  // ]);lue

  return (
    <div className="cardcontainerflex">
      {items.map((item) => {
        return <Cardbox item={item} key={item.id} />;
      })}
    </div>
  );
}
