import React from "react";

export default function Promises() {
  // const task = new Promise((resolve) => {
  //   resolve(true);
  // });

  // const promise2 = (numero) =>
  //   new Promise((resolve, reject) => {
  //     if (numero % 2 == 0) {
  //       resolve(`${numero} es par`);
  //     } else {
  //       reject("no es par");
  //     }
  //   });

  // promise2(2)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log("Error", err));

  // uso de promesa creada, es decir un fetch

  //------------------- una forma de hacerlo
  // const llamada = () => {
  //   let resultado = fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((respuesta) => console.log(respuesta))
  //     .catch((err) => console.log("Error", err));

  //   console.log(resultado);
  // };

  // llamada();
  //------------------- segunda forma de hacerlo, con querryparam, le puedo indicar qye me traiga de la pagina 2 la info: ?page=2"  , o le puedo decir que me traiga un dato en especifico, que me traiga solo los ricks y que esten vivos: &name=rick&status=alive

  const llamada = () => {
    fetch(
      "https://rickandmortyapi.com/api/character?page=2&name=rick&status=alive"
    )
      .then((res) => res.json())
      .then((respuesta) => console.log(respuesta))
      .catch((err) => console.log("Error", err));
  };

  let resultadoFetch = llamada();
  console.log(resultadoFetch);

  //-------------------

  // Map

  const array = [1, 2, 3, 4, 5, 6, 7];

  //--- recorriendo mi array con Map:

  // const NewArray = array.map((arrayelement, i) => console.log(arrayelement, i));

  //-----modificacion de mi array :

  const NewArray = array.map((arrayelement, i) => arrayelement * 2);

  console.log(NewArray);

  return <div>Promises</div>;
}
