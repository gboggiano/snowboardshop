import React from "react";
import Cardbox from "../Cardbox-comp/Cardbox";
import "./style.css";
import { useState, useEffect } from "react";
import data from "../items.json";
import { Link } from "react-router-dom";

export default function Category() {
  const [items, setItems] = useState(data.items);

  useEffect(() => {}, []);

  return (
    <div className="cardcontainerflex">
      {items.map((item) => {
        return <Cardbox arti={item} key={item.id} />;
      })}
    </div>
  );
}
