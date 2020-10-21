import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { Col, Row, Form } from "react-bootstrap";
import FormButtons from "../FormButtons";

export default function FormUser() {
  const appContext = useContext(AppContext);
  const { handleChange, form, isValid, handleDirectChange } = appContext;
  const [startDate, setStartDate] = useState(new Date());
  // const [filename, setFilename] = useState("");
  // const handleFile = (e) => {
  //   setFilename(e.target.files[0].name);
  // };

  function keyData(e) {
    // console.log(e);
    var v = e.target.value;
    if (v.match(/^\d{2}$/) !== null) {
      e.target.value = v + "/";
    } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
      e.target.value = v + "/";
    }
  }

  function keyRG(e) {
    var v = e.target.value;
    if (v.match(/^\d{2}$/) !== null) {
      e.target.value = v + ".";
    } else if (v.match(/^\d{2}\.\d{3}$/) !== null) {
      e.target.value = v + ".";
    } else if (v.match(/^\d{2}\.\d{3}\.\d{3}$/) !== null) {
      e.target.value = v + "-";
    }
  }

  function keyCpf(e) {
    var v = e.target.value;
    if (v.match(/^\d{3}$/) !== null) {
      e.target.value = v + ".";
    } else if (v.match(/^\d{3}\.\d{3}$/) !== null) {
      e.target.value = v + ".";
    } else if (v.match(/^\d{3}\.\d{3}\.\d{3}$/) !== null) {
      e.target.value = v + "-";
    }
  }

  function keyTelefone(e) {
    var v = e.target.value;
    if (v.match(/^\d{1,2}$/) !== null) {
      e.target.value = "(" + v;
    } else if (v.match(/^\(\d{2}$/) !== null) {
      e.target.value = v + ")";
    } else if (v.match(/^\(\d{2}\)\d{5}$/) !== null) {
      e.target.value = v + "-";
    }
  }

  function keyTelefoneEmp(e) {
    var v = e.target.value;
    if (v.match(/^\d{1,2}$/) !== null) {
      e.target.value = "(" + v;
    } else if (v.match(/^\(\d{2}$/) !== null) {
      e.target.value = v + ")";
    } else if (v.match(/^\(\d{2}\)\d{4}$/) !== null) {
      e.target.value = v + "-";
    }
  }

  return (
    <>
      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={12} style={{ marginBottom: "15px" }}>
          <Form.Label>Eu Sou *</Form.Label>
          <Form.Check
            className="ml-4"
            onClick={() => handleDirectChange("person_type", "1")}
            inline
            label="Pessoa física"
            type="radio"
            name="person-type"
            id={`inline-radio-1`}
            checked={form.person_type == "1"}
          />
          <Form.Check
            className="ml-4"
            onClick={() => handleDirectChange("person_type", "2")}
            inline
            label="Pessoa jurídica"
            type="radio"
            name="person-type"
            id={`inline-radio-2`}
            checked={form.person_type == "2"}
          />
        </Col>

        {form.person_type == "1" && (
          <>
            <Col sm={12} md={4}>
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.nome}
                onChange={handleChange("nome")}
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Sobrenome *</Form.Label>
              <Form.Control
                value={form.sobrenome}
                onChange={handleChange("sobrenome")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>
                Data de nascimento{" "}
                {form.person_type == "2" ? "do Representante" : ""} *
              </Form.Label>
              <Form.Control
                required
                type="text"
                value={form.dataNascimentoUser2}
                placeholder="dd/mm/aaaa"
                className={isValid("dataNascimentoUser2")}
                onChange={handleChange("dataNascimentoUser2")}
                onKeyUp={keyData}
                maxlength="10"
              />
            </Col>

            <Col sm={12} md={6}>
              <Form.Label>
                E-mail {form.person_type == "2" ? "do Representante" : ""}*
              </Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleChange("email")}
                className={isValid("email")}
                required
                type="email"
              />
            </Col>

            <Col sm={12} md={6}>
              <Form.Label>
                Celular {form.person_type == "2" ? "do Representante" : ""}*
              </Form.Label>
              <Form.Control
                value={form.telefone}
                onChange={handleChange("telefone")}
                onKeyUp={keyTelefone}
                required
                placeholder="(00)00000-0000"
                maxlength="14"
                type="text"
              />
            </Col>

            <Col sm={12} md={4}>
              <Form.Label>
                {form.estrangeiro == 2 ? "CPF" : "Passaporte"} *
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="000.000.000-00"
                value={form.cpf}
                onKeyUp={keyCpf}
                maxlength="14"
                className={isValid("cpf")}
                onChange={handleChange("cpf")}
              />
            </Col>

            <Col sm={12} md={4}>
              <Form.Label>
                RG {form.person_type == "2" ? "do Representante" : ""} *
              </Form.Label>
              <Form.Control
                required
                type="text"
                value={form.rgCliente}
                placeholder="00.000.000-0"
                onKeyUp={keyRG}
                maxlength="12"
                className={isValid("rgCliente")}
                onChange={handleChange("rgCliente")}
              />
            </Col>

            <Col sm={12} md={4}>
              <Form.Label>
                Orgão Emissor do RG{" "}
                {form.person_type == "2" ? "do Representante" : ""} *
              </Form.Label>
              <Form.Control
                required
                type="text"
                value={form.orgaoEmissorCliente2}
                // className={isValid("orgaoEmissorCliente2")}
                onChange={handleChange("orgaoEmissorCliente2")}
              />
            </Col>

            <Col sm={12} md={4}>
              <Form.Label>Senha para Login *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha}
                onChange={handleChange("senha")}
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Digite sua senha novamente *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha2}
                onChange={handleChange("senha2")}
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Categorias</Form.Label>
              <Form.Control
                value={form.categoria}
                onChange={handleChange("categoria")}
                as="select"
              >
                <option value="1">OTA</option>
                <option value="2">Operadora Turística</option>
                <option value="3">Agência de Viagem</option>
                <option value="4">DMC</option>
                <option value="5">Hotéis</option>
                <option value="6">Empresa</option>
                <option value="7">Pessoa Física</option>
                <option value="8">Fornecedores</option>
                <option value="9">Guia de Turismo</option>
                <option value="10">Cliente Interno</option>
              </Form.Control>
            </Col>
          </>
        )}

        {form.person_type == "2" && (
          <>
            <Col sm={12} md={6}>
              <Form.Label>CNPJ *</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.cnpj}
                className={isValid("cnpj")}
                onChange={handleChange("cnpj")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail da empresa *</Form.Label>
              <Form.Control
                value={form.emailCnpj}
                onChange={handleChange("emailCnpj")}
                className={isValid("emailCnpj")}
                required
                type="email"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Nome Fantasia *</Form.Label>
              <Form.Control
                value={form.fantasiaCliente2}
                onChange={handleChange("fantasiaCliente2")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Razão Social *</Form.Label>
              <Form.Control
                value={form.razao}
                onChange={handleChange("razao")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Inscrição Municipal *</Form.Label>
              <Form.Control
                required
                value={form.inscMunicipalCliente2}
                onChange={handleChange("inscMunicipalCliente2")}
                type="text"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Inscrição Estadual</Form.Label>
              <Form.Control
                value={form.inscEstadualCliente2}
                onChange={handleChange("inscEstadualCliente2")}
                type="text"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>
                Telefone da Empresa *
              </Form.Label>
              <Form.Control
                value={form.telefoneEmpresa}
                onKeyUp={keyTelefoneEmp}
                className={isValid("telefoneEmpresa")}
                maxlength="13"
                placeholder="(00)0000-0000"
                onChange={handleChange("telefoneEmpresa")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Nome do representante *</Form.Label>
              <Form.Control
                value={form.nome}
                onChange={handleChange("nome")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Sobrenome do representante *</Form.Label>
              <Form.Control
                value={form.sobrenome}
                onChange={handleChange("sobrenome")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>
                E-mail {form.person_type == "2" ? "do Representante" : ""}*
              </Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleChange("email")}
                className={isValid("email")}
                required
                type="email"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>
                Celular {form.person_type == "2" ? "do Representante" : ""}*
              </Form.Label>
              <Form.Control
                value={form.telefone}
                onKeyUp={keyTelefone}
                className={isValid("telefone")}
                maxlength="14"
                placeholder="(00)00000-0000"
                onChange={handleChange("telefone")}
                required
                type="text"
              />
            </Col>

            <Col sm={12} md={4}>
              <Form.Label>
                {form.estrangeiro == 2 ? "CPF" : "Passaporte"} do representante
                *
              </Form.Label>
              <Form.Control
                value={form.cpfUser}
                onChange={handleChange("cpfUser")}
                className={isValid("cpfUser")}
                placeholder="000.000.000-00"
                onKeyUp={keyCpf}
                maxlength="14"
                required
                type="text"
              />
            </Col>

            <Col sm={12} md={4}>
              <Form.Label>
                RG {form.person_type == "2" ? "do Representante" : ""} *
              </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="00.000.000-0"
                value={form.rgCliente}
                onKeyUp={keyRG}
                maxlength="12"
                className={isValid("rgCliente")}
                onChange={handleChange("rgCliente")}
              />
            </Col>

            <Col sm={12} md={4}>
              <Form.Label>
                Data de nascimento{" "}
                {form.person_type == "2" ? "do Representante" : ""} *
              </Form.Label>
              <Form.Control
                required
                type="text"
                value={form.dataNascimentoUser2}
                placeholder="dd/mm/aaaa"
                className={isValid("dataNascimentoUser2")}
                onChange={handleChange("dataNascimentoUser2")}
                onKeyUp={keyData}
                maxlength="10"
              />
            </Col>

            <Col sm={12} md={4}>
              <Form.Label>Senha para Login *</Form.Label>
              <Form.Control
                required
                value={form.senha}
                onChange={handleChange("senha")}
                type="password"
              />
            </Col>
            <Col sm={12} md={4}>
              <Form.Label>Digite sua senha novamente *</Form.Label>
              <Form.Control
                required
                value={form.senha2}
                onChange={handleChange("senha2")}
                type="password"
              />
            </Col>
          </>
        )}
      </Row>
      <FormButtons />
    </>
  );
}
