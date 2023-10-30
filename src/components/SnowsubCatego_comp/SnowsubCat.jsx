import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import brandlogo from "../../Assets/snlogo.jpeg";
import { db } from "../..";
import { collection, getDocs, where, query } from "firebase/firestore";
import ProdCardsbox from "../ProdudCardsBox_comp/ProdCardsbox";

export default function SnowsubCat() {
  const [items2, setItems2] = useState([]);
  const [loading, setLoading] = useState(true);

  const callFS2 = () => {
    const itemCollection = query(
      collection(db, "productos"),
      where("type", "==", "board")
    );
    getDocs(itemCollection).then((res) => {
      let item2 = res.docs.map((elm) => ({ ...elm.data() }));
      setItems2(item2);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    callFS2();
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
          return <ProdCardsbox prod={item2} key={item2.id} />;
        })
      )}
    </div>
  );
}
