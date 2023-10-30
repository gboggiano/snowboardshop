import React from "react";
import "./style.css";
import Swal from "sweetalert2";

export default function Globalbutton({ title, description }) {
  const showDescription = () => {
    Swal.fire(description);
  };

  return (
    <div>
      <button className="btn btn-success" onClick={showDescription}>
        {title}
      </button>
    </div>
  );
}
