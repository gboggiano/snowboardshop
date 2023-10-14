import React, { useEffect } from "react";
import { ContextCollection } from "../../context/ContextCollection";
import { useState } from "react";

export default function ContextProvider({ children }) {
  const [collection, setCollection] = useState([]);

  // para mantener lo que esta en el carrito y usar el local storage JSON

  //   useEffect(() => {
  //     console.log(localStorage.getItem("collection"));
  //     if (localStorage.length > 0) {
  //       setCollection(localStorage.getItem("collection"));
  //     }
  //   }, []);

  //funcion para guardar en local storage

  //   const saveLS = (prod) => {
  //     setCollection([...collection, prod]);
  //     let collectionLS = JSON.parse(localStorage.getItem("collection"));
  //     if (collectionLS) {
  //       collectionLS.push(prod);
  //       localStorage.setItem("collection", JSON.stringify(collectionLS));
  //     } else {
  //       localStorage.setItem("collection", JSON.stringify([prod]));
  //     }
  //   };

  return (
    <ContextCollection.Provider value={{ collection, setCollection }}>
      {children}
    </ContextCollection.Provider>
  );
}
