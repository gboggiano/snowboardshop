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
          <Link className="customlinkbrand" link to={"/"}>
            <section className="navbarlogo">
              <img className="imgbrand" src={imglogo} />
              <h1 className="custombrandname">Snowster Online Store</h1>
            </section>
          </Link>
          <section className="navbarmenu">
            <ul>
              <Link link to={"/"}>
                <button className="btn btn-outline-dark customlink">
                  Home
                </button>
              </Link>

              <button className="btn btn-outline-dark customlink">
                Snowboards
              </button>
              <button className="btn btn-outline-dark customlink">Gear</button>
              <button className="btn btn-outline-dark customlink">
                Clothes
              </button>
              <Link link to={"/cardsapi"}>
                <button className="btn btn-outline-dark customlink">
                  About Rick and Morty(Api Test)
                </button>
              </Link>
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
