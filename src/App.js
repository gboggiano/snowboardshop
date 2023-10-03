// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar-comp/Navbar";
import ItemlistContainer from "./components/ItemlistCointainer-comp/ItemlistContainer";
import Promises from "./Test/Promises-comp/Promises";
import MainCardsli from "./Test/MainCardList/MainCardsli";
import Promisesapi from "./Test/Promisesapi-comp/Promisesapi";
import ContPa from "./Test/ContadorPadre/ContPa";
import Itemcount from "./Test/Itemcount-comp/Itemcount";
import { useCounter } from "./Test/CustomHook-comp/useCounter";
import { useFetch } from "./Test/CustomHook-comp/useFetch";
import { HOC } from "./Test/CustomHook-comp/HOC";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import HeaderwithChildren from "./Test/HeaderwithChildren/HeaderwithChildren";
import { useEffect, useState } from "./Test/CustomHook-comp/useCounterHOC";
import Apicards from "./Test/Apicards-comp/Apicards";
import Headerchildren from "./components/Headerchildren-comp/Headerchildren";

const welcomemessage = {
  message:
    "Welcome to Snowster, your online snowboarding store! We have the best snowboards, gear and clothing for you. Check out our blog for tips, reviews and news. Need help? Just ask us. Shop now and enjoy the snow! Thank you for choosing Snowster!",
};

function App() {
  // este es la seccion de Itemcount pasada como parametro en desde este componente padre via useCounter(productosA) al archivo useCounter.js en useCounter = (productosA)

  const productosA = [
    {
      titulo: "Iphone 15",
      stock: 10,
    },
  ];

  //------- para el UseCounter voy a desestructurar las variables, ya que conozco el nombre de las mismas :

  // const { increase, decrease, disabled1, disabled2, cuenta } =
  //   useCounter(productosA);

  //-------- la segunda manera de traerse el custom Hook (userCounter.js) es de la siguiente manera:

  //-- si nos fijamos estoy teniendo 2 contadores, difiere del de arriba, no desestructuramos y entonces los usamos con counter1.icrease o counter2.increase, la razon es traer funcionalidades por separado para reutilizar

  const counter1 = useCounter(productosA);
  const counter2 = useCounter(productosA);
  // "https://rickandmortyapi.com/api/character"

  // desestructuro para traer al data que quier de mi fetch

  // const { personajes } = useFetch("https://rickandmortyapi.com/api/character");

  // uso el useEffect para decirle que cuando se monte el componnete

  //**** HOC */ ----------

  // Mi HOC recibe, es decir de aqui le mando el componente Itemcount y prodcutos
  const ItemcountHOC1 = HOC(Itemcount, productosA, "Contador1");
  const ItemcountHOC2 = HOC(
    Itemcount,
    productosA,
    "Contador2 usando rerouting"
  );

  //**** HOC */ ----------

  return (
    <BrowserRouter>
      <Headerchildren>
        <Routes>
          <Route
            path="/"
            element={<ItemlistContainer message={welcomemessage.message} />}
            exact
          />
          <Route path="/contador2" element={<ItemcountHOC2 />} />
          <Route path="/cardsapi" element={<Promisesapi />} />
        </Routes>
      </Headerchildren>
    </BrowserRouter>
  );
}
export default App;
