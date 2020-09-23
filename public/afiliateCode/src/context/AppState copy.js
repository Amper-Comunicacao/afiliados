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
    senha: false,
    agencia: false,
    digito_agencia: false,
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

  const validationFunctions = {
    cpf(strCPF = form.cpf) {
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
    },
    cpfUser(strCPF = form.cpfUser) {
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
    },
    cnpj(cnpj = form.cnpj) {
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
      pt2: ["cnpj", "cpfUser", "telefone", "email"],
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

  const checkStep = async () => {
    var currentStep = stepValidations["s" + step]["p" + form.person_type];

    var tempValids = { ...valids };

    var stepValid = true;
    for (let i = 0; i < currentStep.length; i++) {
      console.log(
        stepValidationFunctions.hasOwnProperty(currentStep[i]),
        currentStep[i]
      );
      if (!tempValids[currentStep[i]]) {
        stepValid = false;
        break;
      } else if (
        step != totalSteps &&
        stepValidationFunctions.hasOwnProperty(currentStep[i])
      ) {
        var stepAsyncValid = await stepValidationFunctions[currentStep[i]]();
        if (!stepAsyncValid) {
          stepValid = false;
          break;
        }
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
      if (step !== totalSteps) {
        var stepValid = await checkStep();
        if (stepValid) {
          nextStep();
          tempValidated = false;
        }
      } else {
        submitData();
        // setShowToast(true);
      }
    }
    setValidated(tempValidated);
  };

  const submitData = async () => {
    var submitCpf = form.person_type == 1 ? form.cpf.replace(/\D+/g, "") : "";
    var submitCnpj = form.person_type == 2 ? form.cnpj.replace(/\D+/g, "") : "";
    var submitCpfUser =
      form.person_type == 2 ? form.cpfUser.replace(/\D+/g, "") : submitCpf;
    var submitTaxid =
      form.person_type == 3 ? form.taxid.replace(/\D+/g, "") : "";
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
      paisCliente2: form.pais,
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
      cpfUser2: submitCpfUser,
      emailUser2: form.email,
      nomeUser2: form.nome,
      sobrenomeUser2: form.sobrenome,
      senhaUser2: form.senha,
    };
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

// <select class="form-control" id="compCountry" name="compCountry" data-input="Select" data-validate="true">
//                     <option value="">Selecione o pais</option>
//                     <option value="30">Brazil</option>

//                                               <option value="1">Afghanistan</option>
                                
//                                                 <option value="2">Albania</option>
                                
//                                                 <option value="3">Algeria</option>
                                
//                                                 <option value="4">American Samoa</option>
                                
//                                                 <option value="5">Andorra</option>
                                
//                                                 <option value="6">Angola</option>
                                
//                                                 <option value="7">Anguilla</option>
                                
//                                                 <option value="8">Antarctica</option>
                                
//                                                 <option value="9">Antigua and Barbuda</option>
                                
//                                                 <option value="10">Argentina</option>
                                
//                                                 <option value="11">Armenia</option>
                                
//                                                 <option value="12">Aruba</option>
                                
//                                                 <option value="13">Australia</option>
                                
//                                                 <option value="14">Austria</option>
                                
//                                                 <option value="15">Azerbaijan</option>
                                
//                                                 <option value="16">Bahamas</option>
                                
//                                                 <option value="17">Bahrain</option>
                                
//                                                 <option value="18">Bangladesh</option>
                                
//                                                 <option value="19">Barbados</option>
                                
//                                                 <option value="20">Belarus</option>
                                
//                                                 <option value="21">Belgium</option>
                                
//                                                 <option value="22">Belize</option>
                                
//                                                 <option value="23">Benin</option>
                                
//                                                 <option value="24">Bermuda</option>
                                
//                                                 <option value="25">Bhutan</option>
                                
//                                                 <option value="26">Bolivia</option>
                                
//                                                 <option value="27">Bosnia and Herzegovina</option>
                                
//                                                 <option value="28">Botswana</option>
                                
//                                                 <option value="29">Bouvet Island</option>
                                
//                                                 <option value="31">British Indian Ocean Territory</option>
                                
//                                                 <option value="32">Brunei Darussalam</option>
                                
//                                                 <option value="33">Bulgaria</option>
                                
//                                                 <option value="34">Burkina Faso</option>
                                
//                                                 <option value="35">Burundi</option>
                                
//                                                 <option value="36">Cambodia</option>
                                
//                                                 <option value="37">Cameroon</option>
                                
//                                                 <option value="38">Canada</option>
                                
//                                                 <option value="39">Cape Verde</option>
                                
//                                                 <option value="40">Cayman Islands</option>
                                
//                                                 <option value="41">Central African Republic</option>
                                
//                                                 <option value="42">Chad</option>
                                
//                                                 <option value="43">Chile</option>
                                
//                                                 <option value="44">China</option>
                                
//                                                 <option value="45">Christmas Island</option>
                                
//                                                 <option value="46">Cocos (Keeling) Islands</option>
                                
//                                                 <option value="47">Colombia</option>
                                
//                                                 <option value="48">Comoros</option>
                                
//                                                 <option value="49">Congo</option>
                                
//                                                 <option value="50">Cook Islands</option>
                                
//                                                 <option value="51">Costa Rica</option>
                                
//                                                 <option value="52">Cote D'Ivoire</option>
                                
//                                                 <option value="53">Croatia</option>
                                
//                                                 <option value="54">Cuba</option>
                                
//                                                 <option value="55">Cyprus</option>
                                
//                                                 <option value="56">Czech Republic</option>
                                
//                                                 <option value="57">Denmark</option>
                                
//                                                 <option value="58">Djibouti</option>
                                
//                                                 <option value="59">Dominica</option>
                                
//                                                 <option value="60">Dominican Republic</option>
                                
//                                                 <option value="61">East Timor</option>
                                
//                                                 <option value="62">Ecuador</option>
                                
//                                                 <option value="63">Egypt</option>
                                
//                                                 <option value="64">El Salvador</option>
                                
//                                                 <option value="65">Equatorial Guinea</option>
                                
//                                                 <option value="66">Eritrea</option>
                                
//                                                 <option value="67">Estonia</option>
                                
//                                                 <option value="68">Ethiopia</option>
                                
//                                                 <option value="69">Falkland Islands (Malvinas)</option>
                                
//                                                 <option value="70">Faroe Islands</option>
                                
//                                                 <option value="71">Fiji</option>
                                
//                                                 <option value="72">Finland</option>
                                
//                                                 <option value="74">France, Metropolitan</option>
                                
//                                                 <option value="75">French Guiana</option>
                                
//                                                 <option value="76">French Polynesia</option>
                                
//                                                 <option value="77">French Southern Territories</option>
                                
//                                                 <option value="78">Gabon</option>
                                
//                                                 <option value="79">Gambia</option>
                                
//                                                 <option value="80">Georgia</option>
                                
//                                                 <option value="81">Germany</option>
                                
//                                                 <option value="82">Ghana</option>
                                
//                                                 <option value="83">Gibraltar</option>
                                
//                                                 <option value="84">Greece</option>
                                
//                                                 <option value="85">Greenland</option>
                                
//                                                 <option value="86">Grenada</option>
                                
//                                                 <option value="87">Guadeloupe</option>
                                
//                                                 <option value="88">Guam</option>
                                
//                                                 <option value="89">Guatemala</option>
                                
//                                                 <option value="90">Guinea</option>
                                
//                                                 <option value="91">Guinea-Bissau</option>
                                
//                                                 <option value="92">Guyana</option>
                                
//                                                 <option value="93">Haiti</option>
                                
//                                                 <option value="94">Heard and Mc Donald Islands</option>
                                
//                                                 <option value="95">Honduras</option>
                                
//                                                 <option value="96">Hong Kong</option>
                                
//                                                 <option value="97">Hungary</option>
                                
//                                                 <option value="98">Iceland</option>
                                
//                                                 <option value="99">India</option>
                                
//                                                 <option value="100">Indonesia</option>
                                
//                                                 <option value="101">Iran (Islamic Republic of)</option>
                                
//                                                 <option value="102">Iraq</option>
                                
//                                                 <option value="103">Ireland</option>
                                
//                                                 <option value="104">Israel</option>
                                
//                                                 <option value="105">Italy</option>
                                
//                                                 <option value="106">Jamaica</option>
                                
//                                                 <option value="107">Japan</option>
                                
//                                                 <option value="108">Jordan</option>
                                
//                                                 <option value="109">Kazakhstan</option>
                                
//                                                 <option value="110">Kenya</option>
                                
//                                                 <option value="111">Kiribati</option>
                                
//                                                 <option value="112">North Korea</option>
                                
//                                                 <option value="113">Korea, Republic of</option>
                                
//                                                 <option value="114">Kuwait</option>
                                
//                                                 <option value="115">Kyrgyzstan</option>
                                
//                                                 <option value="116">Lao People's Democratic Republic</option>
                                
//                                                 <option value="117">Latvia</option>
                                
//                                                 <option value="118">Lebanon</option>
                                
//                                                 <option value="119">Lesotho</option>
                                
//                                                 <option value="120">Liberia</option>
                                
//                                                 <option value="121">Libyan Arab Jamahiriya</option>
                                
//                                                 <option value="122">Liechtenstein</option>
                                
//                                                 <option value="123">Lithuania</option>
                                
//                                                 <option value="124">Luxembourg</option>
                                
//                                                 <option value="125">Macau</option>
                                
//                                                 <option value="126">FYROM</option>
                                
//                                                 <option value="127">Madagascar</option>
                                
//                                                 <option value="128">Malawi</option>
                                
//                                                 <option value="129">Malaysia</option>
                                
//                                                 <option value="130">Maldives</option>
                                
//                                                 <option value="131">Mali</option>
                                
//                                                 <option value="132">Malta</option>
                                
//                                                 <option value="133">Marshall Islands</option>
                                
//                                                 <option value="134">Martinique</option>
                                
//                                                 <option value="135">Mauritania</option>
                                
//                                                 <option value="136">Mauritius</option>
                                
//                                                 <option value="137">Mayotte</option>
                                
//                                                 <option value="138">Mexico</option>
                                
//                                                 <option value="139">Micronesia, Federated States of</option>
                                
//                                                 <option value="140">Moldova, Republic of</option>
                                
//                                                 <option value="141">Monaco</option>
                                
//                                                 <option value="142">Mongolia</option>
                                
//                                                 <option value="143">Montserrat</option>
                                
//                                                 <option value="144">Morocco</option>
                                
//                                                 <option value="145">Mozambique</option>
                                
//                                                 <option value="146">Myanmar</option>
                                
//                                                 <option value="147">Namibia</option>
                                
//                                                 <option value="148">Nauru</option>
                                
//                                                 <option value="149">Nepal</option>
                                
//                                                 <option value="150">Netherlands</option>
                                
//                                                 <option value="151">Netherlands Antilles</option>
                                
//                                                 <option value="152">New Caledonia</option>
                                
//                                                 <option value="153">New Zealand</option>
                                
//                                                 <option value="154">Nicaragua</option>
                                
//                                                 <option value="155">Niger</option>
                                
//                                                 <option value="156">Nigeria</option>
                                
//                                                 <option value="157">Niue</option>
                                
//                                                 <option value="158">Norfolk Island</option>
                                
//                                                 <option value="159">Northern Mariana Islands</option>
                                
//                                                 <option value="160">Norway</option>
                                
//                                                 <option value="161">Oman</option>
                                
//                                                 <option value="162">Pakistan</option>
                                
//                                                 <option value="163">Palau</option>
                                
//                                                 <option value="164">Panama</option>
                                
//                                                 <option value="165">Papua New Guinea</option>
                                
//                                                 <option value="166">Paraguay</option>
                                
//                                                 <option value="167">Peru</option>
                                
//                                                 <option value="168">Philippines</option>
                                
//                                                 <option value="169">Pitcairn</option>
                                
//                                                 <option value="170">Poland</option>
                                
//                                                 <option value="171">Portugal</option>
                                
//                                                 <option value="172">Puerto Rico</option>
                                
//                                                 <option value="173">Qatar</option>
                                
//                                                 <option value="174">Reunion</option>
                                
//                                                 <option value="175">Romania</option>
                                
//                                                 <option value="176">Russian Federation</option>
                                
//                                                 <option value="177">Rwanda</option>
                                
//                                                 <option value="178">Saint Kitts and Nevis</option>
                                
//                                                 <option value="179">Saint Lucia</option>
                                
//                                                 <option value="180">Saint Vincent and the Grenadines</option>
                                
//                                                 <option value="181">Samoa</option>
                                
//                                                 <option value="182">San Marino</option>
                                
//                                                 <option value="183">Sao Tome and Principe</option>
                                
//                                                 <option value="184">Saudi Arabia</option>
                                
//                                                 <option value="185">Senegal</option>
                                
//                                                 <option value="186">Seychelles</option>
                                
//                                                 <option value="187">Sierra Leone</option>
                                
//                                                 <option value="188">Singapore</option>
                                
//                                                 <option value="189">Slovak Republic</option>
                                
//                                                 <option value="190">Slovenia</option>
                                
//                                                 <option value="191">Solomon Islands</option>
                                
//                                                 <option value="192">Somalia</option>
                                
//                                                 <option value="193">South Africa</option>
                                
//                                                 <option value="194">South Georgia &amp; South Sandwich Islands</option>
                                
//                                                 <option value="195">Spain</option>
                                
//                                                 <option value="196">Sri Lanka</option>
                                
//                                                 <option value="197">St. Helena</option>
                                
//                                                 <option value="198">St. Pierre and Miquelon</option>
                                
//                                                 <option value="199">Sudan</option>
                                
//                                                 <option value="200">Suriname</option>
                                
//                                                 <option value="201">Svalbard and Jan Mayen Islands</option>
                                
//                                                 <option value="202">Swaziland</option>
                                
//                                                 <option value="203">Sweden</option>
                                
//                                                 <option value="204">Switzerland</option>
                                
//                                                 <option value="205">Syrian Arab Republic</option>
                                
//                                                 <option value="206">Taiwan</option>
                                
//                                                 <option value="207">Tajikistan</option>
                                
//                                                 <option value="208">Tanzania, United Republic of</option>
                                
//                                                 <option value="209">Thailand</option>
                                
//                                                 <option value="210">Togo</option>
                                
//                                                 <option value="211">Tokelau</option>
                                
//                                                 <option value="212">Tonga</option>
                                
//                                                 <option value="213">Trinidad and Tobago</option>
                                
//                                                 <option value="214">Tunisia</option>
                                
//                                                 <option value="215">Turkey</option>
                                
//                                                 <option value="216">Turkmenistan</option>
                                
//                                                 <option value="217">Turks and Caicos Islands</option>
                                
//                                                 <option value="218">Tuvalu</option>
                                
//                                                 <option value="219">Uganda</option>
                                
//                                                 <option value="220">Ukraine</option>
                                
//                                                 <option value="221">United Arab Emirates</option>
                                
//                                                 <option value="222">United Kingdom</option>
                                
//                                                 <option value="223">United States</option>
                                
//                                                 <option value="224">United States Minor Outlying Islands</option>
                                
//                                                 <option value="225">Uruguay</option>
                                
//                                                 <option value="226">Uzbekistan</option>
                                
//                                                 <option value="227">Vanuatu</option>
                                
//                                                 <option value="228">Vatican City State (Holy See)</option>
                                
//                                                 <option value="229">Venezuela</option>
                                
//                                                 <option value="230">Viet Nam</option>
                                
//                                                 <option value="231">Virgin Islands (British)</option>
                                
//                                                 <option value="232">Virgin Islands (U.S.)</option>
                                
//                                                 <option value="233">Wallis and Futuna Islands</option>
                                
//                                                 <option value="234">Western Sahara</option>
                                
//                                                 <option value="235">Yemen</option>
                                
//                                                 <option value="237">Democratic Republic of Congo</option>
                                
//                                                 <option value="238">Zambia</option>
                                
//                                                 <option value="239">Zimbabwe</option>
                                
//                                                 <option value="240">Jersey</option>
                                
//                                                 <option value="241">Guernsey</option>
                                
//                                                 <option value="242">Montenegro</option>
                                
//                                                 <option value="243">Serbia</option>
                                
//                                                 <option value="244">Aaland Islands</option>
                                
//                                                 <option value="245">Bonaire, Sint Eustatius and Saba</option>
                                
//                                                 <option value="246">Curacao</option>
                                
//                                                 <option value="247">Palestinian Territory, Occupied</option>
                                
//                                                 <option value="248">South Sudan</option>
                                
//                                                 <option value="249">St. Barthelemy</option>
                                
//                                                 <option value="250">St. Martin (French part)</option>
                                
//                                                 <option value="251">Canary Islands</option>
                                
                        
//                   </select>