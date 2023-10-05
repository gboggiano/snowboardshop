import React from "react";
import { useState } from "react";
import Cardbox from "../Cardbox-comp/Cardbox";
import "./style.css";
import board from "../../Assets/boards.jpg";
import clothes1 from "../../Assets/apparel.jpg";
import gear1 from "../../Assets/helmet.jpg";

export default function Category() {
  const [catego, setItems] = useState([
    {
      title: "Snowboards",
      image: { ...new Image(board) },
    },
    {
      title: "Gear",
      image: { ...new Image(clothes1) },
    },
    {
      title: "Clothes and Apparel",
      image: { ...new Image(gear1) },
    },
  ]);

  return (
    <div className="cardcontainerflex">
      {catego.map((elem) => {
        return <Cardbox cate={elem} key={elem.id} />;
      })}
    </div>
  );
}
