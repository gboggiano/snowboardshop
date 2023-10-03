import { useEffect, useState } from "react";
import React from "react";
import Buttonone from "../Button-one/Buttonone";
import userEvent from "@testing-library/user-event";

// actividad : crea un componente Itemcount, que debe estar compuesto de um botón y controles, para incrementar y decrementar la cantidad requerida de items

// para ello es necesario un listado de donde estan los prodcutos, en este ejemplo usaremos un json , tambien será neceario el contador para saber cuantos items tengo en stock, usamos useState y creamos una variable, el ejercicio indica que se debe seshabilitar el boton una vez alcance el maximo de stock, para eso lo vamos hacer con una prop dentro del componente buttonone

export default function Itemcount() {
  const [cuenta, setCuenta] = useState(0);
  const [disabled1, setDisable1] = useState(false);
  const [disabled2, setDisable2] = useState(true);
  const productosA = [
    {
      titulo: "Iphone 15",
      stock: 10,
    },
  ];

  //

  const increase = () => {
    // if (productosA[0].stock > cuenta) {
    setCuenta(cuenta + 1);
    //   setDisable2(false);
    // } else {
    //   setDisable1(true);
    // }
  };

  const decrease = () => {
    // if (cuenta === 0) {
    //   setDisable2(true);
    //   setDisable1(false);
    // } else {
    setCuenta(cuenta - 1);
    // }
  };

  useEffect(() => {
    if (cuenta == 0) {
      setDisable2(true);
      setDisable1(false);
    } else if (cuenta >= 1) {
      setDisable2(false);
    }
    if (cuenta === productosA[0].stock) {
      setDisable1(true);
      setDisable2(false);
    }
  }, [cuenta]); //**

  // se puede hacer lo mismo con useEffect, vamos a comentar los if y else y procedemos hacerlo con useEffect,, dejando las funciones solo para sumar y restar

  return (
    <div>
      <Buttonone
        title={"agregar"}
        funcion={increase}
        turnoffbutton={disabled1}
      />
      {cuenta}
      <Buttonone
        title={"Retirar"}
        funcion={decrease}
        turnoffbutton={disabled2}
      />
    </div>
  );
}
