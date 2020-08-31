import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./custom.scss";
import "./App.scss";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ReasonsSection from "./components/ReasonsSection";
import PartnersSection from "./components/PartnersSection";

function App() {
  return (
    <>
      <Header/>
      <MainSection/>
      <ReasonsSection/>
      <PartnersSection/>
    </>
  );
}

export default App;
