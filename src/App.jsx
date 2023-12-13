import { useState } from "react";
import "./App.css";
import "../public/image/logo.png";
import Header from "./Components/Header/Header";
import Brown from "./components/Brown/Brown";
import Products from "./components/Products/Products";
import Ourproduct from "./components/Ourproduct/Ourproduct";
import Simple from "./components/Simple/Simple";
import Question from "./components/Question/Question";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Products/>
      <Brown/>
      <Ourproduct/>
      <Simple/>
      <Question/>
      <Footer/>
    </div>
  );
}

export default App;
