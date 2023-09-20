import React, { useState } from "react";
import "./style.css";
import Cards from "../Cards-comp/Cards";
import Buttonone from "../Button-one/Buttonone";

export default function MainCardsli() {
  const [items, setItems] = useState([
    {
      title: "Snowboard table",
      brand: "Santa Cruz",
      price: "USD$ 300",
      category: "Tables",
      description:
        "Medidas: 147 - 150 - 159 , Snap! Rocker - Freestyle - Freeride, True Twin, Base: Speed X5000, Sidewall ABS+ Core: Poplar HCM, Fibre Laminate: Hetero Biax, Flex 6/10, Torsion 7/10 ",
    },
    {
      title: "Snowboard boots",
      brand: "DC",
      price: "USD$ 280",
      category: "Clothing",
      description:
        "BOA® Snowboard Boots for Men. Features include: Fabric:Synthetic upper fabric, Outsole:Contact Unilite™ rubber outsole, Fit System:BOA® fit system with H4 coiler dial and internal ankle harness, Insole:Sole re-purpose insole, Closure:Zonal closure, Lining:Response liner II, Flex Rating:4/10, Articulated construction.",
    },
    {
      title: "Oakley Mod helmet",
      brand: "Santa Cruz",
      price: "USD$ 200",
      category: "Helmets",
      description:
        "A lightweight and low-profile design inspired by the classic skate-style helmet. The MOD1 is available in three fits (standard, Asian, and youth) and delivers simplicity with premium functionality for wherever your on-mountain adventures take you. ",
    },
  ]);

  const [dark, setLight] = useState(true);
  const modeON = () => {
    setLight(!dark);
  };

  return (
    <div
      className="card-container_flex"
      style={
        dark ? { backgroundColor: "#566480" } : { backgroundColor: "white" }
      }
    >
      {items.map((elem) => {
        return (
          <Cards
            title={elem.title}
            brand={elem.brand}
            price={elem.price}
            category={elem.category}
            description={elem.description}
          />
        );
      })}
      <Buttonone title="Background Light/Dark mode" funcion={modeON} />
    </div>
  );
}