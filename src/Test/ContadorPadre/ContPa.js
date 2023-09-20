import { useState, useEffect } from "react";
import React from "react";
import "./style.css";
import Buttonone from "../Button-one/Buttonone";

export default function ContPa() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const [charact, setCharact] = useState([]);

  //usando useEffect
  // recibe 2 parameteros: el 1° funcion a ejecutar usando ()=>{}
  // el 2° luego de una coma (),) ARRAY de dependencia a escuchar
  // cada vez que se actualice count ejecuta la funcion console.log o lo que esté

  useEffect(() => {
    // console.log("se actualizó la cuenta");
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((json) => {
        setCharact(json);
        console.log(json);
      });

    // funcion para cuando se desmonte mi compomponente se usan dentro del return ()
    return () => console.log("Se DESMONTÓ COMPLETAMENTE");
  }, []);

  return (
    <div className="Container">
      <Buttonone title={"Aumentar"} funcion={increase} />
      <p>{count}</p>
      <Buttonone title={"Reducir"} funcion={decrease} />
    </div>
  );
}
