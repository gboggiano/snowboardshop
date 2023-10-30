import React from "react";
import { useState, useEffect } from "react";
import brandlogo from "../../Assets/snlogo.jpeg";
import { db } from "../..";
import { collection, getDocs, where, query } from "firebase/firestore";
import ProdCardsbox from "../ProdudCardsBox_comp/ProdCardsbox";

export default function Gearpro() {
  const [items3, setItems3] = useState([]);
  const [loading, setLoading] = useState(true);

  const callFS3 = () => {
    const itemCollection = query(
      collection(db, "productos"),
      where("type", "==", "helmet")
    );
    getDocs(itemCollection).then((res) => {
      let item3 = res.docs.map((elm) => ({ ...elm.data() }));
      setItems3(item3);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    callFS3();
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
        items3.map((item3) => {
          return <ProdCardsbox prod={item3} key={item3.id} />;
        })
      )}
    </div>
  );
}
