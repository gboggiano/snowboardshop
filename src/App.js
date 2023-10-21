// import logo from "./logo.svg";
import React, { useContext } from "react";
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
import { useState } from "react";
import Apicards from "./Test/Apicards-comp/Apicards";
import Headerchildren from "./components/Headerchildren-comp/Headerchildren";
import Apicharacters from "./components/Apitest-comp/Apicharacters";
import Snowcategory from "./components/SnowsubCategory-comp/Snowcategory";
//--Context
import ContextProvider from "./components/Contextprovider-comp/ContextProvider";
import Gear from "./components/GearsubCategory-comp/Gear";

const welcomemessage = {
  message:
    "Welcome to Snowster, your online snowboarding store! We have the best snowboards, gear and clothing for you. Check out our blog for tips, reviews and news. Need help? Just ask us. Shop now and enjoy the snow! Thank you for choosing Snowster!",
};

function App() {
  //--Context -----------------//
  // const Context = useContext(ContextCollection);

  //--state (Global)- Context--//

  //movido a ContextProvider.js

  //--state - (Global) - Context--//

  //--Context ------------------//

  const productosA = [
    {
      titulo: "Iphone 15",
      stock: 10,
    },
  ];

  const counter1 = useCounter(productosA);
  const counter2 = useCounter(productosA);

  const ItemcountHOC1 = HOC(Itemcount, productosA, "Contador1");
  const ItemcountHOC2 = HOC(
    Itemcount,
    productosA,
    "Contador2 usando rerouting"
  );

  return (
    <BrowserRouter>
      <ContextProvider>
        <Headerchildren>
          <Routes>
            <Route
              path="/"
              element={<ItemlistContainer message={welcomemessage.message} />}
              exact
            />
            <Route
              path="/snowboardcategory/1"
              element={<Snowcategory />}
              exact
            />
            <Route path="/snowboardcategory/2" element={<ItemcountHOC2 />} />
            <Route path="/snowboardcategory/3" element={<Gear />} />
            <Route path="/cardsapi/" element={<Promisesapi />} />
            <Route path="/rmcharacters/:name" element={<Apicharacters />} />
          </Routes>
        </Headerchildren>
      </ContextProvider>
    </BrowserRouter>
  );
}
export default App;
