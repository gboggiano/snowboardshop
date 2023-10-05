import React, { useState, useEffect } from "react";
import Apicards from "../Apicards-comp/Apicards";
import "./style.css";
import { Link } from "react-router-dom";

export default function Promisesapi() {
  //   const [dark, setLight] = useState(true);

  //   const modeON = () => {
  //     setLight(!dark);
  //   };

  //-- 4 guardado de personajes
  const [personajes, setPersonajes] = useState([]);

  //-  1 primero copiamos o hacemos el fetch :

  const llamada = () => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((res) => res.json())
      .then((respuesta) => setPersonajes(respuesta.results)) // 2 aqui quiero guardarlo en mi estado en vez de un console.log, si voy a la consola veré los objetos info y results, yo lo que quiero es usar resolts para eso usamos respuesta.results, una vez confirmado que trae lo que quiero ahora le seteo el status con setPersonajes ** paso numero 4
      .catch((err) => console.log("Error", err));
  };
  // -- 3 hay que guardar los personajes en un estado
  //-----

  // 5 utilizamos un useEffect de montaje para que cuando se monte el compomnente me haga el llamado a la API

  useEffect(() => {
    llamada();
  }, []);

  // 6 aqui le colocamos un if para indicarle que si hay algo en personajes me cargas lo que va despues del return
  return personajes.lenght === 0 ? (
    <p>Cargando</p>
  ) : (
    <div
      className="card-container_flex"
      //   style={
      //     dark ? { backgroundColor: "#566480" } : { backgroundColor: "white" }
      //   }
    >
      <Link to={"/rmcharacters/Rick"}>
        <button>How many Ricks are?</button>
      </Link>
      {personajes.map((elem) => {
        return <Apicards producto={elem} key={elem.id} />;
      })}
      {/* <Buttonone title="Background Light/Dark mode" funcion={modeON} /> */}
    </div>
  );
}
