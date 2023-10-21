import React, { useEffect, useState } from "react";
import { db } from "../..";
import { collection, getDocs } from "firebase/firestore";
import { Form } from "react-router-dom";
import ProdcardBox from "../Prodcardbox-comp/ProdcardBox";
import "./style.css";

export default function Gear() {
  const [itemsH, setItemsH] = useState([]);
  const [loading, setLoading] = useState(true);
  const callFS = () => {
    const itemCollection = collection(db, "productos");
    getDocs(itemCollection).then((res) => {
      let itemsH = res.docs.map((elm) => ({ ...elm.data() }));
      console.log(itemsH);
      setItemsH(itemsH);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    callFS();
  }, []);

  return (
    <div className="gearcontainerflex">
      {loading ? (
        <div>
          <h2>LOADING</h2>
        </div>
      ) : (
        itemsH.map((itemsH) => {
          return <ProdcardBox prod={itemsH} key={itemsH.id} />;
        })
      )}
    </div>
  );
}
