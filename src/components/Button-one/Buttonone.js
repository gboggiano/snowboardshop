import React from "react";

export default function Buttonone({ title, funcion }) {
  return (
    <div>
      <button onClick={() => funcion()}>{title}</button>
    </div>
  );
}
