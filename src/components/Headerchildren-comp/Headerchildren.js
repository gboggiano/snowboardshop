import React from "react";
import Headerglo from "../Headerfooter-comp/Headerglo";
import "./style.css";
import imgfoot from "./../../Assets/snlogo.jpeg";

export default function Headerchildren({ children }) {
  return (
    <>
      <Headerglo />
      {children}
      <section className="customimgfooter">
        <img className="customfootimg" src={imgfoot} />
        <p>
          This website is a portfolio project created by gboggiano using React.
          It is not a real online store and it does not sell any products or
          services. The products and prices displayed on this website are for
          demonstration purposes only and do not reflect the actual market value
          or availability of the items
        </p>
        <section className="customfootlist">
          <h2>Snowster</h2>
          <ul className="customulfooter">
            <li>Snowster</li>
            <li>Creator</li>
            <li>Creator</li>
          </ul>
        </section>
      </section>
    </>
  );
}
