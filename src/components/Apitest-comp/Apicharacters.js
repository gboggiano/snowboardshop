import React, { useState, useEffect } from "react";
import Apicards from "../../Test/Apicards-comp/Apicards";
import "./style.css";
import { useParams } from "react-router-dom"; // captura el parametro que voy a enviar

export default function Apicharacters() {
  const [personajes, setPersonajes] = useState([]);
  //constante para campturar useParams -----
  const { name } = useParams();

  const llamada = () => {
    fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
      .then((res) => res.json())
      .then((respuesta) => setPersonajes(respuesta.results))
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    llamada();
  }, []);

  return personajes.lenght === 0 ? (
    <p>Cargando</p>
  ) : (
    <div className="cardContainerFlex">
      {personajes.map((elem) => {
        return <Apicards producto={elem} key={elem.id} />;
      })}
    </div>
  );
}
