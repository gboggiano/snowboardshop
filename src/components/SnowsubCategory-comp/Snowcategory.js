import React from "react";
import "./style.css";
import snowdata from "../items2.json";
import { useState, useEffect } from "react";
import ProdcardBox from "../Prodcardbox-comp/ProdcardBox";
import brandlogo from "../../Assets/snlogo.jpeg";

export default function Snowcategory() {
  const [items2, setItems2] = useState(snowdata.items2);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="snowcardcontainerflex">
      {loading ? (
        <div className="customLoadingbox">
          <img className="customImgloadingBox" src={brandlogo} />
          <div className="spinner"></div>
          <h2 className="loadingtextSnow ">LOADING.....</h2>
        </div>
      ) : (
        items2.map((item2) => {
          return <ProdcardBox prod={item2} key={item2.id} />;
        })
      )}
    </div>
  );
}
