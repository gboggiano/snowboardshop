import React from "react";
import "./style.css";
import CartWidget from "../CartWidget-comp/CartWidget";

export default function Navbar() {
  return (
    <>
      <div className="navbarcontainer">
        <nav className="navbarbox">
          <section className="navbarlogo">
            <h1>Snowster Online Store</h1>
          </section>
          <section className="navbarmenu">
            <ul>
              <li className="btn btn-outline-dark customlink">Home</li>
              <li className="btn btn-outline-dark customlink">
                Snowboard Tables
              </li>
              <li className="btn btn-outline-dark customlink">Gear</li>
              <li className="btn btn-outline-dark customlink">Clothes</li>
              <li className="btn btn-outline-dark customlink">About</li>
            </ul>
          </section>
          <section className="cartWidgetfromCart">
            <CartWidget />
          </section>
        </nav>
      </div>
    </>
  );
}
