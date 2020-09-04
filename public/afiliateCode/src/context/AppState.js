import React, { useState, useEffect, useCallback } from "react";
import AppContext from "./AppContext";

import translationData from "./translationData.json";

export default function AppState(props) {
  const [step, setStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(3);
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [cpvalid, setCpvalid] = useState(true);
  const [form, setForm] = useState({
    person_type: "pj",
    cpf: "",
    cnpj: "",
    nome: "",
    razao: "",
    telefone: "",
    email: "",
    categoria: "Agências",
    cep: "",
    rua: "",
    cidade: "",
    bairro: "",
    estado: "",
    complemento: "",
    endereço_numero: "",
    banco: "001 – Banco do Brasil S.A.",
    tipo_conta: "Corrente",
    agencia: "",
    digito_agencia: "",
    conta: "",
    digito_conta: "",
    
  });

  const [language, setLanguage] = useState("Portuguese");
  const [translation, setTranslation] = useState(translationData[language]);

  const validarCPF = () => {
    var strCPF = form.cpf;
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "") return false;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }

  const validarCNPJ = () =>{
    var cnpj = form.cnpj;
    console.log(form, cnpj, form.cnpj);
    cnpj = cnpj.replace(/[^\d]+/g, "");

    if (cnpj == "") return false;

    if (cnpj.length != 14) return false;

    // Elimina CNPJs invalidos conhecidos
    if (
      cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999"
    )
      return false;

    // Valida DVs
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;

    return true;
  }

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslation(translationData[lang]);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    var tempForm = { ...form };
    tempForm[input] = e.target.value;
    setForm(tempForm);
  };

  const handleValues = (arrinfos) =>{
    var tempForm = { ...form };
    for (let i = 0; i < arrinfos.length;i++){
      tempForm[arrinfos[i][0]] = arrinfos[i][1];
    }
    setForm(tempForm);
  }

  const handleSubmit = (event) => {
    var form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    var tempValidated = true;
    var allValid = true;

    // console.log("val", validarCNPJ());
    // if (
    //   step == 1 &&
    //   !((form.person_type === "pj" && validarCNPJ()) || validarCPF())
    // ) {
    //   console.log("testepos");
    //   setCpvalid(false);
    //   allValid = false;
    // }

    if (form.checkValidity() !== false) {
      if (step !== totalSteps) {
        if (allValid) {
          nextStep();
          tempValidated = false;
        }
      } else {
        setShowToast(true);
      }
    }
    setValidated(tempValidated);
    // console.log(cpvalid);
  };

  return (
    <AppContext.Provider
      value={{
        step,
        validated,
        showToast,
        setShowToast,
        nextStep,
        cpvalid,
        changeLanguage,
        prevStep,
        totalSteps,
        translation,
        handleSubmit,
        language,
        form,
        handleChange,
        handleValues,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
