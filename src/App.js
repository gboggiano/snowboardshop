// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import HeaderwithChild from "./components/HeaderwithChildren_comp/HeaderwithChild";
import ItemListCointaner from "./components/ItemlistCointainer_comp/ItemListCointaner";
import SnowsubCat from "./components/SnowsubCatego_comp/SnowsubCat";
import Clothes from "./components/ClothessubCatego_comp/Clothes";
import Gearpro from "./components/GearsubCatego_comp/Gearpro";
import { CartProvider } from "./context/CartContext";

const welcomemessage = {
  message:
    "Welcome to Snowster, your online snowboarding store! We have the best snowboards, gear and clothing for you. Check out our blog for tips, reviews and news. Need help? Just ask us. Shop now and enjoy the snow! Thank you for choosing Snowster!",
};

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <HeaderwithChild>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListCointaner message={welcomemessage.message} exact />
              }
            />
            <Route path="/category/1" element={<SnowsubCat exact />} />
            <Route path="/category/3" element={<Clothes exact />} />
            <Route path="/category/2" element={<Gearpro exact />} />
          </Routes>
        </HeaderwithChild>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
