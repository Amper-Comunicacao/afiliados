import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import ReasonsSection from "./components/ReasonsSection";
import PartnersSection from "./components/PartnersSection";
import FormSection from "./components/Fornecedores/FormSection";
import AppState from "./context/Fornecedores/AppState";
import FormToast from "./components/FormToast";
import MapSection from "./components/MapSection";

function App() {
  document.title = "Fornecedores - C2Tours"
  return (
    <AppState>
      <Header />
      <MainSection />
      <ReasonsSection />
      <PartnersSection />
      <MapSection/>
      <FormSection />
      <Footer />
      <FormToast/>
    </AppState>
  );
}

export default App;
