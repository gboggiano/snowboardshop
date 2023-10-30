import React from "react";
import "../HeaderwithChildren_comp/headerwithChildren.css";
import imgfoot from "./../../Assets/snlogo.jpeg";
import Headerwithfooter from "../HeaderwithFooter_comp/Headerwithfooter";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function HeaderwithChild({ children }) {
  return (
    <>
      <Headerwithfooter />
      {children}
      <section className="customimgfooter">
        <img className="customfootimg" src={imgfoot} />
        <p>
          This website is a tech test and academic delivery, only to show an
          online store using React. The products, prices, images, and
          descriptions are for demonstration purposes only and do not reflect
          the actual availability or value of the items.
        </p>
        <section className="customfootlist">
          <h2>Snowster</h2>
          <ul className="customulfooter">
            <li className="badge text-bg-info"> About me : </li>
            <Link to={"https://github.com/gboggiano"} target="_blank">
              <li className="badge text-bg-secondary">My Github</li>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/guillermo-boggiano-12b404154/"}
              target="_blank"
            >
              <li className="badge text-bg-primary">LinkedIn</li>
            </Link>
          </ul>
        </section>
      </section>
    </>
  );
}
