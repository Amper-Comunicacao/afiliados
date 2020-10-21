/* eslint-disable */
import React, { useState } from "react";
import AppContext from "../AppContext";
import axios from "axios";

import translationData from "../translationDataAfiliados.json";

export default function AppState(props) {
  const [step, setStep] = useState(1);
  // const [totalSteps, setTotalSteps] = useState(3);
  const totalSteps = 4;
  // const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [hideToast, setHideToast] = useState(true);
  const [validated, setValidated] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("danger");
  const [cpvalid, setCpvalid] = useState(true);
  const [form, setForm] = useState({
    person_type: "1",
    estrangeiro: "2",
    cpf: "",
    rgCliente: "",
    orgaoEmissorCliente2: "",
    cnpj: "",
    cpfUser: "",
    taxid: "",
    nome: "",
    sobrenome: "",
    razao: "",
    telefone: "",
    email: "",
    dataNascimentoUser2: "",
    emailCnpj: "",
    categoria: "9",
    inscEstadualCliente2: "",
    inscMunicipalCliente2: "",
    fantasiaCliente2: "",
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
    imageIdentity: "",
    imagePDF: "",
    imageCPF: "",
  });

  const [valids, setValids] = useState({
    cpf: false,
    cpfUser: false,
    cnpj: false,
    rgCliente: false,
    taxid: false,
    telefone: false,
    dataNascimentoUser2: false,
    email: false,
    emailCnpj: false,
    senha: false,
    agencia: false,
    digito_agencia: true,
    conta: false,
    digito_conta: false,
  });

  // const [allValid, setAllValid] = useState(false);

  function brDateBarra(date) {
    let arr = date.split("-");
    return `${arr[2]}/${arr[1]}/${arr[0]}`;
  }

  function invBrDate(date) {
    let arr = date.split("/");
    return `${arr[2]}-${arr[1]}-${arr[0]}`;
  }

  const [language, setLanguage] = useState("Portuguese");
  const [translation, setTranslation] = useState(translationData[language]);

  String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
      return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
  };

  const pontuaCPF = (cpf) => {
    try {
      return `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
        6,
        9
      )}-${cpf.substring(9, 11)}`;
    } catch (e) {
      return cpf;
    }
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
    rgCliente(val) {
      return val.replace(/\D+/g, "").length >= 0;
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
    dataNascimentoUser2(dateString) {
      // var datacrua = val;
      // datacrua = datacrua.replaceAt(2,"");
      // datacrua = datacrua.replaceAt(4,"");
      // return (val[2] == "/" && val[5] == "/" && datacrua.replace(/\D+/g, "").length >= 0 && val.length == 10)

      // First check for the pattern
      // if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) return false;
      if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return false;

      // Parse the date parts to integers
      var parts = dateString.split("/");
      var day = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10);
      var year = parseInt(parts[2], 10);

      // Check the ranges of month and year
      if (year < 1000 || year > 3000 || month == 0 || month > 12) return false;

      var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      // Adjust for leap years
      if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

      // Check the range of the day
      return day > 0 && day <= monthLength[month - 1];
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

  const stepValidations = {
    s1: {
      pt1: ["cpf", "telefone", "email", "dataNascimentoUser2"],
      pt2: ["cnpj", "cpfUser", "telefone", "email", "emailCnpj"],
      pt3: ["taxid", "telefone", "email"],
    },
    s2: {
      pt1: [],
      pt2: [],
      pt3: [],
    },
    s3: {
      pt1: [],
      pt2: [],
      pt3: [],
    },
    s4: {
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

  const handleDirectChange = (input, value) => {
    var tempForm = { ...form };
    tempForm[input] = value;
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
        rgCliente: form.rgCliente,
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
      rgCliente: true,
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
      setToastType("danger");
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
    var fantasiaCliente2 =
      form.person_type == 2 ? form.fantasiaCliente2 : form.nome;

    var tempData = {
      eusouCliente2: form.person_type,
      cpfCliente2: submitCpf.replace(/\D+/g, ""),
      cnpjCliente2: submitCnpj.replace(/\D+/g, ""),
      // codidCliente2: submitTaxid,
      rgCliente2: form.rgCliente.replace(/\D+/g, ""),
      dataNascimentoUser2: invBrDate(form.dataNascimentoUser2),
      orgaoEmissorCliente2: form.orgaoEmissorCliente2,
      inscEstadualCliente2: form.inscEstadualCliente2,
      inscMunicipalCliente2: form.inscMunicipalCliente2,
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
      cpfUser2: pontuaCPF(submitCpfUser.replace(/\D+/g, "")),
      emailUser2: form.email,
      nomeUser2: form.nome,
      sobrenomeUser2: form.sobrenome,
      senhaUser2: form.senha,
      // passaporteUser2: passaporteSubmit,
      // estrangeiro2: form.estrangeiro,
      fantasiaCliente2,
      imageIdentity: form.imageIdentity,
      imagePDF: form.imagePDF,
      imageCPF: form.imageCPF,
    };

    setToastMessage("loading");
    setToastType("");
    setShowToast(true);

    try {

      var sendData = new FormData();
      sendData.append("json", JSON.stringify(tempData));

      var result = await axios({
        method: "post",
        url: "https://c2.tours/insert_cliente_Webservice",
        data: sendData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (result.data == "ok") {
        window.scrollTo(null, 0);
        setToastType("success");
        setToastMessage("Seu cadastro foi concluído com sucesso.");
        setShowToast(true);
      }
    } catch (e) {
      console.log(e);
      setToastType("danger");
      setToastMessage("Houve algum erro com o seu cadastro.");
      setShowToast(true);
    }
  };

  return (
    <AppContext.Provider
      value={{
        step,
        validated,
        showToast,
        setShowToast,
        setToastMessage,
        setToastType,
        nextStep,
        cpvalid,
        isValid,
        changeLanguage,
        prevStep,
        totalSteps,
        toastType,
        translation,
        setForm,
        handleSubmit,
        language,
        form,
        handleChange,
        handleValues,
        handleDirectChange,
        toastMessage,
        hideToast,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
