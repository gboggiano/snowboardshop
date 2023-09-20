import React from "react";
import "./style.css";
import Header from "../Header-comp/Header";

export default function HeaderwithChildren({ children }) {
  return (
    <>
      <Header />
      {children}
      <div className="footer">Footer</div>
    </>
  );
}
