import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import ReasonsSection from "./components/ReasonsSection";
import PartnersSection from "./components/PartnersSection";
import FormSection from "./components/Afiliados/FormSection";
import AppState from "./context/Afiliados/AppState";
import FormToast from "./components/FormToast";

function App() {
  document.title = "Afiliados - C2Tours"
  return (
    <AppState>
      <Header />
      <MainSection />
      <ReasonsSection />
      <PartnersSection />
      <FormSection />
      <Footer />
      <FormToast/>
    </AppState>
  );
}

export default App;
