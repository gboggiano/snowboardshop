import React from "react";
import Headerglo from "../Headerfooter-comp/Headerglo";
import "./style.css";

export default function Headerchildren({ children }) {
  return (
    <>
      <Headerglo />
      {children}
      <div className="customfooter">Footer</div>
    </>
  );
}
