import React from "react";
import "./style.css";

// para el ejercicio del stock agregaremos una prop dentro de neustro boton
export default function Buttonone({ title, funcion, turnoffbutton }) {
  return (
    <div className="btn btn-success">
      <button disabled={turnoffbutton} onClick={() => funcion()}>
        {title}
      </button>
    </div>
  );
}
