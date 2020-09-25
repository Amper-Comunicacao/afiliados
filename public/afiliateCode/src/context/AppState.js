/* eslint-disable */
import React, { useState } from "react";
import AppContext from "./AppContext";
import axios from "axios";

import translationData from "./translationData.json";

export default function AppState(props) {
  const [step, setStep] = useState(1);
  // const [totalSteps, setTotalSteps] = useState(3);
  const totalSteps = 3;
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [hideToast, setHideToast] = useState(true);
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [cpvalid, setCpvalid] = useState(true);
  const [form, setForm] = useState({
    person_type: "1",
    estrangeiro: "2",
    cpf: "",
    cnpj: "",
    cpfUser: "",
    taxid: "",
    nome: "",
    sobrenome: "",
    razao: "",
    telefone: "",
    email: "",
    emailCnpj: "",
    categoria: "1",
    inscEstadualCliente2: "",
    inscMunicipalCliente2: "",
    paisCliente: "30",
    cep: "",
    rua: "",
    cidade: "",
    bairro: "",
    estado: "",
    complemento: "",
    endereço_numero: "",
    banco: "001",
    tipo_conta: "Corrente",
    agencia: "",
    digito_agencia: "",
    conta: "",
    digito_conta: "",
    senha: "",
    senha2: "",
  });

  const [valids, setValids] = useState({
    cpf: false,
    cpfUser: false,
    cnpj: false,
    taxid: false,
    telefone: false,
    email: false,
    emailCnpj: false,
    senha: false,
    agencia: false,
    digito_agencia: true,
    conta: false,
    digito_conta: false,
  });

  const [allValid, setAllValid] = useState(false);

  const [language, setLanguage] = useState("Portuguese");
  const [translation, setTranslation] = useState(translationData[language]);

  const validarCPF = (strCPF = form.cpf) => {
    // var strCPF = form.cpf;
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF === "") return false;
    if (strCPF === "00000000000") return false;

    for (let i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
    return true;
  };

  const validarCNPJ = (cnpj = form.cnpj) => {
    // var cnpj = form.cnpj;
    // console.log(form, cnpj, form.cnpj);
    cnpj = cnpj.replace(/[^\d]+/g, "");
    console.log("cnpj", cnpj);
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
  };

  const pontuaCPF = (cpf) => {
    return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
      6,
      9
    )}-${cpf.substring(9, 11)}`;
  };

  const validationFunctions = {
    cpf(strCPF = form.cpf) {
      // var strCPF = form.cpf;
      var Soma;
      var Resto;
      Soma = 0;
      strCPF = strCPF.replace(/\D+/g, "");
      if (strCPF === "") return false;
      if (strCPF === "00000000000") return false;

      if (form.estrangeiro == 1) {
        return true;
      }

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
      return true;
    },
    cpfUser(strCPF = form.cpfUser) {
      // var strCPF = form.cpf;
      var Soma;
      var Resto;
      Soma = 0;
      strCPF = strCPF.replace(/\D+/g, "");
      if (strCPF === "") return false;
      if (strCPF === "00000000000") return false;

      if (form.estrangeiro == 1) {
        return true;
      }

      for (let i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

      Soma = 0;
      for (let i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto === 10 || Resto === 11) Resto = 0;
      if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
      return true;
    },
    cnpj(cnpj = form.cnpj) {
      // var cnpj = form.cnpj;
      // console.log(form, cnpj, form.cnpj);
      cnpj = cnpj.replace(/[^\d]+/g, "");
      // console.log("cnpj", cnpj);
      if (cnpj == "") return false;

      if (cnpj.length != 14) return false;
      return true;

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
    },
    taxid(val) {
      return val.replace(/\D+/g, "").length >= 0;
    },
    telefone(val) {
      return val.replace(/\D+/g, "").length >= 0;
    },
    agencia(val) {
      return val.replace(/\D+/g, "").length >= 0;
    },
    digito_agencia(val) {
      return val.replace(/\D+/g, "").length <= 1;
    },
    conta(val) {
      return val.replace(/\D+/g, "").length >= 0;
    },
    digito_conta(val) {
      return val.replace(/\D+/g, "").length == 1;
    },
    email(val) {
      return true;
    },
    emailCnpj(val) {
      return true;
    },
    senha(val) {
      return val === form.senha2;
    },
    senha2(val) {
      return val === form.senha;
    },
  };

  const stepValidationFunctions = {
    async cpf() {
      var tempCpf = form.cpf.replace(/\D+/g, "");
      var tempBool = true;
      tempBool = await axios.get("https://c2.tours/cpf_cliente_webservice", {
        params: {
          cpfCliente: tempCpf,
        },
      });
      tempBool =
        !tempBool &&
        (await axios.get("https://c2.tours/cpf_user_cliente_webservice", {
          params: {
            cpfUserCliente: tempCpf,
          },
        }));
      tempBool =
        !tempBool &&
        (await axios.get("https://c2.tours/cpf_user_cliente_sig", {
          params: {
            cpfUserCliente: tempCpf,
          },
        }));
      setValids({ ...valids, cpf: tempBool });
      return tempBool;
    },
    async cpfUser() {
      var tempCpf = form.cpfUser.replace(/\D+/g, "");
      var tempBool = true;
      tempBool = await axios.get("https://c2.tours/cpf_cliente_webservice", {
        params: {
          cpfCliente: tempCpf,
        },
      });
      tempBool =
        !tempBool &&
        (await axios.get("https://c2.tours/cpf_user_cliente_webservice", {
          params: {
            cpfUserCliente: tempCpf,
          },
        }));
      tempBool =
        !tempBool &&
        (await axios.get("https://c2.tours/cpf_user_cliente_sig", {
          params: {
            cpfUserCliente: tempCpf,
          },
        }));
      setValids({ ...valids, cpfUser: tempBool });
      return tempBool;
    },
    async email() {
      var tempCpf = form.email.replace(/\D+/g, "");
      var tempBool = true;
      tempBool = await axios.get("https://c2.tours/cpf_cliente_webservice", {
        params: {
          cpfCliente: tempCpf,
        },
      });
      tempBool =
        !tempBool &&
        (await axios.get("https://c2.tours/cpf_user_cliente_webservice", {
          params: {
            emailCliente: tempCpf,
          },
        }));
      tempBool =
        !tempBool &&
        (await axios.get("https://c2.tours/cpf_user_cliente_sig", {
          params: {
            emailCliente: tempCpf,
          },
        }));
      setValids({ ...valids, email: tempBool });
      return tempBool;
    },
    async cnpj() {
      var tempCnpj = form.cnpj.replace(/\D+/g, "");
      var tempBool = true;
      tempBool = await axios.get("https://c2.tours/cnpj_cliente_webservice", {
        params: {
          cnpjCliente: tempCnpj,
        },
      });
      tempBool =
        !tempBool &&
        (await axios.get("https://c2.tours/cnpj_user_cliente_webservice", {
          params: {
            cnpjUserCliente: tempCnpj,
          },
        }));
      setValids({ ...valids, cnpj: tempBool });
      return tempBool;
    },
    async email() {
      var tempCnpj = form.cnpj.replace(/\D+/g, "");
      var tempBool = true;
      tempBool = await axios.get("https://c2.tours/cnpj_cliente_webservice", {
        params: {
          cnpjCliente: tempCnpj,
        },
      });
      tempBool =
        !tempBool &&
        (await axios.get("https://c2.tours/cnpj_user_cliente_webservice", {
          params: {
            cnpjUserCliente: tempCnpj,
          },
        }));
      setValids({ ...valids, cnpj: tempBool });
      return tempBool;
    },
  };

  const stepValidations = {
    s1: {
      pt1: ["cpf", "telefone", "email"],
      pt2: ["cnpj", "cpfUser", "telefone", "email", "emailCnpj"],
      pt3: ["taxid", "telefone", "email"],
    },
    s2: {
      pt1: [],
      pt2: [],
      pt3: [],
    },
    s3: {
      pt1: ["agencia", "digito_agencia", "conta", "digito_conta"],
      pt2: ["agencia", "digito_agencia", "conta", "digito_conta"],
      pt3: ["agencia", "digito_agencia", "conta", "digito_conta"],
    },
  };

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
    // if (input === "cnpj" || input === "cpf" ) {
    //   setCpvalid(((tempForm.person_type === "2" && validarCNPJ(tempForm.cnpj)) || (tempForm.person_type === "1" && validarCPF(tempForm.cpf))));
    // }
    if (valids.hasOwnProperty(input)) {
      handleValidation(input, tempForm[input]);
    }

    setForm(tempForm);
  };

  const handleValidation = (input, val) => {
    var tempValids = { ...valids };
    tempValids[input] = validationFunctions[input](val);
    setValids(tempValids);
  };

  const isValid = (input) => {
    return valids[input] ? "" : "custom-invalid";
  };

  const handleValues = (arrinfos) => {
    var tempForm = { ...form };
    for (let i = 0; i < arrinfos.length; i++) {
      tempForm[arrinfos[i][0]] = arrinfos[i][1];
    }
    setForm(tempForm);
  };

  const checkStep = () => {
    var currentStep = stepValidations["s" + step]["pt" + form.person_type];
    // console.log(currentStep,step,form.person_type,stepValidations["s1"]["pt1"]);
    var tempValids = { ...valids };

    var stepValid = true;
    for (let i = 0; i < currentStep.length; i++) {
      // console.log(
      //   stepValidationFunctions.hasOwnProperty(currentStep[i]),
      //   currentStep[i]
      // );
      if (!tempValids[currentStep[i]]) {
        stepValid = false;
        break;
      }
    }
    return stepValid;
  };

  const handleSubmit = async (event) => {
    var formEl = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    var tempValidated = true;

    if (formEl.checkValidity() !== false) {
      if (checkStep()) {
        if (step !== totalSteps) {
          var step1Async = true;
          if (step == 1) {
            step1Async = await validateAllApi();
          }
          if (step1Async) {
            nextStep();
            tempValidated = false;
          }
        } else {
          submitData();
        }
        // setShowToast(true);
      }
    }
    setValidated(tempValidated);
  };

  const validateAllApi = async () => {
    var submitCpf;
    var submitCnpj;
    var submitCpfUser;
    var submitTaxid;
    var emailEmpresa;
    var passaporteSubmit;

    if (form.estrangeiro == 1) {
      submitCpf = form.person_type == 1 ? form.cpf.replace(/\D+/g, "") : "";
      submitCpfUser =
        form.person_type == 2 ? form.cpfUser.replace(/\D+/g, "") : submitCpf;
      submitCnpj = form.person_type == 2 ? form.cnpj.replace(/\D+/g, "") : "";
      passaporteSubmit = submitCpfUser;
      submitCpf = "";
      submitCpfUser = "";
    } else {
      submitCpf = form.person_type == 1 ? form.cpf.replace(/\D+/g, "") : "";
      submitCnpj = form.person_type == 2 ? form.cnpj.replace(/\D+/g, "") : "";
      submitCpfUser =
        form.person_type == 2 ? form.cpfUser.replace(/\D+/g, "") : submitCpf;
      passaporteSubmit = "";
    }

    submitTaxid = form.person_type == 3 ? form.taxid.replace(/\D+/g, "") : "";
    emailEmpresa = form.person_type == 2 ? form.emailCnpj : form.email;

    // var result = await axios.get("/insert_cliente_Webservice")
    var results = await axios.get("https://c2.tours/validaCliente", {
      params: {
        estrangeiro: form.estrangeiro,
        tipo: form.person_type,
        cpfCliente: submitCpf,
        cpfUserCliente: pontuaCPF(submitCpfUser),
        emailCliente: emailEmpresa,
        emailUserCliente: form.email,
        cnpjCliente: submitCnpj,
        taxidCliente: submitTaxid,
        passaporte: passaporteSubmit,
      },
    });

    var validTemp = {
      cpfCliente: true,
      cpfUser: true,
      emailCliente: true,
      emailUser: true,
      cnpjCliente: true,
      taxidCliente: true,
      passaportUser: true,
    };

    // console.log(results);
    if (results.data[0] && results.data[0] == "ok") {
      return true;
    } else {
      for (let i = 0; i < results.data.length; i++) {
        validTemp[results.data[i]] = false;
      }

      var message = `Os seguintes dados já estão cadastrados no sistema: `;
      message += validTemp.cpfCliente && validTemp.cpfUser ? "" : "cpf, ";
      message += validTemp.emailCliente && validTemp.emailUser ? "" : "email, ";
      message += validTemp.cnpjCliente ? "" : "cnpj, ";
      message += validTemp.taxidCliente ? "" : "taxid, ";
      message += validTemp.passaportUser ? "" : "passaporte, ";

      if (form.person_type == 2 && form.estrangeiro == 1) {
        validTemp.cpfUser = validTemp.passaportUser;
      }

      if (form.person_type != 2 && form.estrangeiro == 1) {
        validTemp.cpfCliente = validTemp.passaportUser;
      }

      var newValids = {
        ...valids,
        cpfUser: validTemp.cpfUser,
        cpf: validTemp.cpfCliente,
        cnpj: validTemp.cnpjCliente,
        email: validTemp.emailUser,
        emailCnpj: validTemp.emailCliente,
        taxid: validTemp.taxidCliente,
      };

      setValids(newValids);
      setToastMessage(message);
      setShowToast(true);

      return false;
    }
  };

  const submitData = async () => {
    var submitCpf;
    var submitCnpj;
    var submitCpfUser;
    var submitTaxid;
    var emailEmpresa;
    var passaporteSubmit;

    if (form.estrangeiro == 1) {
      submitCpf = form.person_type == 1 ? form.cpf.replace(/\D+/g, "") : "";
      submitCpfUser =
        form.person_type == 2 ? form.cpfUser.replace(/\D+/g, "") : submitCpf;
      submitCnpj = form.person_type == 2 ? form.cnpj.replace(/\D+/g, "") : "";
      passaporteSubmit = submitCpfUser;
      submitCpf = "";
      submitCpfUser = "";
    } else {
      submitCpf = form.person_type == 1 ? form.cpf.replace(/\D+/g, "") : "";
      submitCnpj = form.person_type == 2 ? form.cnpj.replace(/\D+/g, "") : "";
      submitCpfUser =
        form.person_type == 2 ? form.cpfUser.replace(/\D+/g, "") : submitCpf;
      passaporteSubmit = "";
    }

    submitTaxid = form.person_type == 3 ? form.taxid.replace(/\D+/g, "") : "";
    emailEmpresa = form.person_type == 2 ? form.emailCnpj : form.email;

    var inscEstadualCliente2 =
      form.person_type == 1 ? form.inscEstadualCliente2 : "";
    var inscMunicipalCliente2 =
      form.person_type == 2 ? form.inscMunicipalCliente2 : "";
    var nomeRepresentante = form.person_type == 2 ? form.razao : form.nome;
    var emailEmpresa = form.person_type == 2 ? form.emailCnpj : form.email;

    var tempData = {
      eusouCliente2: form.person_type,
      cpfCliente2: submitCpf,
      cnpjCliente2: submitCnpj,
      codidCliente2: submitTaxid,
      inscEstadualCliente2,
      inscMunicipalCliente2,
      telefoneCliente2: form.telefone.replace(/\D+/g, ""),
      emailCliente2: emailEmpresa,
      nomeCliente2: nomeRepresentante,
      categoriaCliente2: form.categoria,
      paisCliente2: form.paisCliente,
      cepCliente2: form.cep,
      estadoCliente2: form.estado,
      cidadeCliente2: form.cidade,
      bairroCliente2: form.bairro,
      enderecoCliente2: form.rua,
      numberCliente2: form.endereço_numero,
      complementoCliente2: form.complemento,
      bancoCliente2: form.banco,
      agenciaCliente2: form.agencia + form.digito_agencia,
      contaCliente2: form.conta,
      divCliente2: form.digito_conta,
      telefoneUser2: form.telefone.replace(/\D+/g, ""),
      cpfUser2: pontuaCPF(submitCpfUser),
      emailUser2: form.email,
      nomeUser2: form.nome,
      sobrenomeUser2: form.sobrenome,
      senhaUser2: form.senha,
      passaporteUser2: passaporteSubmit,
      estrangeiro2: form.estrangeiro,
    };


    try{
      var result = await axios.get("https://c2.tours/insert_cliente_Webservice", {
        params: {
          json: JSON.stringify(tempData),
        },
      });
      if (result.data == "ok") {
        setToastMessage("Seu cadastro foi concluído com sucesso.")
        setShowToast(true)
      }
      
    } catch (e){
      console.log(e);
      setToastMessage("Houve algum erro com o seu cadastro.")
      setShowToast(true)    
    }




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
        isValid,
        changeLanguage,
        prevStep,
        totalSteps,
        translation,
        handleSubmit,
        language,
        form,
        handleChange,
        handleValues,
        toastMessage,
        hideToast,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
