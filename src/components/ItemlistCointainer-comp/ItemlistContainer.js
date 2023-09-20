import React from "react";
import "./style.css";

export default function ItemlistContainer({ message, messageAlt }) {
  return (
    <div className="welcomemessagestyles">
      <h2>{message}</h2>
      <h2>{messageAlt}</h2>
    </div>
  );
}
