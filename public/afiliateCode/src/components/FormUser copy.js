import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form } from "react-bootstrap";
import FormButtons from "./FormButtons";

export default function FormUser() {
  const appContext = useContext(AppContext);
  const { handleChange, form, nextStep, isValid } = appContext;
  const [filename, setFilename] = useState("");
  const handleFile = (e) => {
    // console.log(e.target.files);
    setFilename(e.target.files[0].name);
  };

  return (
    <>
      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>Eu Sou *</Form.Label>
          <Form.Control
            as="select"
            value={form.person_type}
            onChange={handleChange("person_type")}
          >
            <option value="1">Pessoa física</option>
            <option value="2">Pessoa jurídica</option>
            <option value="3">Tax ID</option>
          </Form.Control>
        </Col>
        <Col sm={12} md={6}>
          <Form.Label>Nacionalidade *</Form.Label>
          <Form.Control
            as="select"
            value={form.estrangeiro}
            onChange={handleChange("estrangeiro")}
          >
            <option value="2">Brasileiro</option>
            <option value="1">Outro</option>
          </Form.Control>
        </Col>

        {form.person_type == "1" && (
            ""
        )}

        {form.person_type == "2" && (
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
        )}

        {form.person_type == "3" && (
          <Col sm={12} md={6}>
            <Form.Label>Tax ID *</Form.Label>
            <Form.Control
              required
              type="text"
              value={form.taxid}
              className={isValid("taxid")}
              onChange={handleChange("taxid")}
            />
          </Col>
        )}
      </Row>

      {form.person_type == "1" && (
        <>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.nome}
                onChange={handleChange("nome")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Sobrenome *</Form.Label>
              <Form.Control
                value={form.sobrenome}
                onChange={handleChange("sobrenome")}
                required
                type="text"
              />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
          <Col sm={12} md={6}>
            <Form.Label>{form.estrangeiro == 2 ? "CPF": "Passaporte"} *</Form.Label>
            <Form.Control
              required
              type="text"
              value={form.cpf}
              className={isValid("cpf")}
              onChange={handleChange("cpf")}
            />
          </Col>
          <Col sm={12} md={6}>
              <Form.Label>Inscrição Estadual</Form.Label>
              <Form.Control
                value={form.inscEstadualCliente2}
                onChange={handleChange("inscEstadualCliente2")}
                type="text"
              />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Senha para Login *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha}
                onChange={handleChange("senha")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Digite sua senha novamente *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha2}
                onChange={handleChange("senha2")}
              />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Telefone *</Form.Label>
              <Form.Control
                value={form.telefone}
                onChange={handleChange("telefone")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail *</Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleChange("email")}
                required
                type="email"
              />
            </Col>
          </Row>
        </>
      )}

      {form.person_type == "2" && (
        <>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Inscrição Municipal</Form.Label>
              <Form.Control
                value={form.inscMunicipalCliente2}
                onChange={handleChange("inscMunicipalCliente2")}
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>CPF do representante *</Form.Label>
              <Form.Control
                value={form.cpfUser}
                onChange={handleChange("cpfUser")}
                required
                type="text"
              />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
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
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Nome do representante *</Form.Label>
              <Form.Control
                value={form.nome}
                onChange={handleChange("nome")}
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
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Sobrenome do representante *</Form.Label>
              <Form.Control
                value={form.sobrenome}
                onChange={handleChange("sobrenome")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail da empresa *</Form.Label>
              <Form.Control
                value={form.emailCnpj}
                onChange={handleChange("emailCnpj")}
                required
                type="email"
              />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Telefone do Representante *</Form.Label>
              <Form.Control
                value={form.telefone}
                onChange={handleChange("telefone")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail do Representante *</Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleChange("email")}
                required
                type="email"
              />
            </Col>
          </Row>
        </>
      )}
      {form.person_type == "3" && (
        <>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Nome *</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.nome}
                onChange={handleChange("nome")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Sobrenome *</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.sobrenome}
                onChange={handleChange("sobrenome")}
              />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Senha para Login *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha}
                onChange={handleChange("senha")}
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Digite sua senha novamente *</Form.Label>
              <Form.Control
                required
                type="password"
                value={form.senha2}
                onChange={handleChange("senha2")}
              />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Telefone *</Form.Label>
              <Form.Control
                value={form.telefone}
                onChange={handleChange("telefone")}
                required
                type="text"
              />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail *</Form.Label>
              <Form.Control
                value={form.email}
                onChange={handleChange("email")}
                required
                type="email"
              />
            </Col>
          </Row>
        </>
      )}

      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
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
        {/* <Col sm={12} md={6}>
          <Form.Label>Logotipo</Form.Label>
          <br />
          <Form.File
            name="file"
            id="custom-file"
            label="Anexar"
            custom
            onChange={handleFile}
          />
          <span className="px-3">{filename}</span>
        </Col> */}
      </Row>
      <FormButtons />
    </>
  );
}
