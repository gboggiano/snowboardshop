import React, { useState } from "react";
import "./style.css";

// 7 a este componente va a recibir del padre Promiseapi la informacion que hemos visto desde el console.log en relacion a los items y sus nombres para que luego se peuda renderizar
export default function Apicards({ producto }) {
  console.log();
  return (
    <div className="card-container">
      <h2>{producto.name}</h2>
      <p>{producto.gender}</p>
      <p>{producto.status}</p>
      <img src={producto.image} />
    </div>
  );
}
