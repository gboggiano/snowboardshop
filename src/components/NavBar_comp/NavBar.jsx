import React from "react";
import "./navbarstyle.css";
import imglogo from "../../Assets/snlogo.png";
import { Link } from "react-router-dom";
import CartWidgetSh from "../CartWidgetShop_comp/CartWidgetSh";

export default function NavBar() {
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
              <Link to={"/category/1"}>
                {" "}
                <button className="btn btn-outline-dark customlink">
                  Snowboards
                </button>
              </Link>
              <Link to={"/category/2"}>
                <button className="btn btn-outline-dark customlink">
                  Gear
                </button>
              </Link>
              <Link to={"/category/3"}>
                <button className="btn btn-outline-dark customlink">
                  Clothes
                </button>
              </Link>
              <CartWidgetSh />
            </ul>
          </section>
        </nav>
      </div>
    </>
  );
}
