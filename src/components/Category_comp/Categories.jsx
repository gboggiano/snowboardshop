import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import data from "../../components/items.json";
import { Link } from "react-router-dom";
import CardBoxCatego from "../CardBoxCategory_comp/CardBoxCatego";

export default function Categories() {
  const [items, setItems] = useState(data.items);

  useEffect(() => {}, []);
  return (
    <div className="cardcontainerflex">
      {items.map((item) => {
        return <CardBoxCatego arti={item} key={item.id} />;
      })}
    </div>
  );
}
