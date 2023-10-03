// yo quiero guardar mi estado es decir mi constante en useState, ya que cuando se actualiza el componente que se sepamos que puede cambiar se alamacena ahi y no se pierde
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [personajes, setPersonajes] = useState([]);
  fetch(url)
    .then((res) => res.json())
    .then((respuesta) => setPersonajes(respuesta.results)) // 2 aqui quiero guardarlo en mi estado en vez de un console.log, si voy a la consola veré los objetos info y results, yo lo que quiero es usar resolts para eso usamos respuesta.results, una vez confirmado que trae lo que quiero ahora le seteo el status con setPersonajes ** paso numero 4
    .catch((err) => console.log("Error", err));

  return { personajes };
};
