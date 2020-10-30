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
        <Col className="d-none" sm={12} md={12} style={{ marginBottom: "15px" }}>
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
            <option value="1">Atrativos Turísticos</option>
            <option value="2">Agências Concierges e Outros Parceiros</option>
            <option value="3">Restaurantes</option>
            <option value="4">Transportadoras</option>
            <option value="5">Operadoras Turísticas</option>
            <option value="6">Encomendas &amp; Correios</option>
            <option value="7">Guias de Turismo</option>
            <option value="8">MotoGuias</option>
            <option value="9">Eventos</option>
            <option value="10">Bancos e Financeiras</option>
            <option value="11">Associações de Classe</option>
            <option value="12">Combustível Pedagio e Manutenção</option>
            <option value="13">Intermediação Mão de Obra</option>
            <option value="14">Energia Eletrica</option>
            <option value="15">Licensas de Software</option>
            <option value="16">Aluguel de Imóveis</option>
            <option value="17">Aluguel de Automóveis</option>
            <option value="18">Manutenção e Limpeza</option>
            <option value="19">Publicidade e Marketing</option>
            <option value="20">Seguradoras</option>
            <option value="21">Serviços Contabilidade</option>
            <option value="22">Suprimentos de TI</option>
            <option value="23">Telefonia Celular</option>
            <option value="24">Telefonia Fixa</option>
            <option value="25">Equipamentos de TI</option>
            <option value="26">Móveis e Utensílios</option>
            <option value="27">Sócios</option>
            <option value="28">UNIFORMES</option>
            <option value="29">INTERNET</option>
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

            <Col sm={12} md={6}>
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
              <Form.Label>Categorias</Form.Label>
              <Form.Control
                value={form.categoria}
                onChange={handleChange("categoria")}
                as="select"
              >
            <option value="1">Atrativos Turísticos</option>
            <option value="2">Agências Concierges e Outros Parceiros</option>
            <option value="3">Restaurantes</option>
            <option value="4">Transportadoras</option>
            <option value="5">Operadoras Turísticas</option>
            <option value="6">Encomendas &amp; Correios</option>
            <option value="7">Guias de Turismo</option>
            <option value="8">MotoGuias</option>
            <option value="9">Eventos</option>
            <option value="10">Bancos e Financeiras</option>
            <option value="11">Associações de Classe</option>
            <option value="12">Combustível Pedagio e Manutenção</option>
            <option value="13">Intermediação Mão de Obra</option>
            <option value="14">Energia Eletrica</option>
            <option value="15">Licensas de Software</option>
            <option value="16">Aluguel de Imóveis</option>
            <option value="17">Aluguel de Automóveis</option>
            <option value="18">Manutenção e Limpeza</option>
            <option value="19">Publicidade e Marketing</option>
            <option value="20">Seguradoras</option>
            <option value="21">Serviços Contabilidade</option>
            <option value="22">Suprimentos de TI</option>
            <option value="23">Telefonia Celular</option>
            <option value="24">Telefonia Fixa</option>
            <option value="25">Equipamentos de TI</option>
            <option value="26">Móveis e Utensílios</option>
            <option value="27">Sócios</option>
            <option value="28">UNIFORMES</option>
            <option value="29">INTERNET</option>
              </Form.Control>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Senha para Login *</Form.Label>
              <Form.Control
                required
                value={form.senha}
                onChange={handleChange("senha")}
                type="password"
              />
            </Col>
            <Col sm={12} md={6}>
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
