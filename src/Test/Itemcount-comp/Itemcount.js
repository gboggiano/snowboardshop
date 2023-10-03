import { useEffect, useState } from "react";
import React from "react";
import Buttonone from "../Button-one/Buttonone";
import userEvent from "@testing-library/user-event";

// recibo las PROPS dentro de Itemcount desde Apps

export default function Itemcount({
  increase,
  decrease,
  disabled1,
  disabled2,
  cuenta,
}) {
  // aqui iba porductosA , lo prodría insertar en mi useCounter.js pero por el tipo que es no sería escalable  así que en vez de insertarlo allá, lo recibo como parametro en useCounter() del archivo useCounter.js y se lo paso desde App.js

  // la idea es traerme el custom hook useCounter.js para que haga lo mismo que el archivo itemcount.js pero en código mas limpio, es decir como recibo la logica de useCount.js a este archivo, MEDIANTE PROPS

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
