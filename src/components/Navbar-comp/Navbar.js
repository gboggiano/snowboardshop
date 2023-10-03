import React from "react";
import "./style.css";
import CartWidget from "../CartWidget-comp/CartWidget";
import { Link } from "react-router-dom";
import imglogo from "../../Assets/snlogo.jpeg";

export default function Navbar() {
  return (
    <>
      <div className="navbarcontainer">
        <nav className="navbarbox">
          <section className="navbarlogo">
            <img className="imgbrand" src={imglogo} />
            <h1 className="custombrandname">Snowster Online Store</h1>
          </section>
          <section className="navbarmenu">
            <ul>
              <Link link to={"/cardsapi"}>
                <button className="btn btn-outline-dark customlink">
                  Home
                </button>
              </Link>

              <button className="btn btn-outline-dark customlink">
                Snowboard Tables
              </button>
              <button className="btn btn-outline-dark customlink">Gear</button>
              <button className="btn btn-outline-dark customlink">
                Clothes
              </button>
              <button className="btn btn-outline-dark customlink">About</button>
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
