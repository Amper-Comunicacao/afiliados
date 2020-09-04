import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";
import FormButtons from "./FormButtons";

export default function FormUser() {
  const appContext = useContext(AppContext);
  const { handleChange, form, nextStep, cpvalid } = appContext;
  const [filename, setFilename] = useState("");

  const handleFile = (e) => {
    // console.log(e.target.files);
    setFilename(e.target.files[0].name);
  };

  return (
    <>
      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>Eu Sou</Form.Label>
          <Form.Control
            as="select"
            value={form.person_type}
            onChange={handleChange("person_type")}
          >
            <option value="pj">Pessoa jurídica</option>
            <option value="pf">Pessoa física</option>
          </Form.Control>
        </Col>
        {form.person_type == "pf" ? (
          <Col sm={12} md={6}>
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              type="text"
              value={form.cpf}
              onChange={handleChange("cpf")}
            />
          </Col>
        ) : (
          <Col sm={12} md={6}>
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              required
              type="text"
              value={form.cnpj}
              onChange={handleChange("cnpj")}
            />
          </Col>
        )}
      </Row>

      {form.person_type == "pf" ? (
        <>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                type="text"
                value={form.nome}
                onChange={handleChange("nome")}
              />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Telefone</Form.Label>
              <Form.Control value={form.cpf}
              onChange={handleChange("cpf")}required type="text" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail</Form.Label>
              <Form.Control value={form.email} onChange={handleChange("email")} required type="email" />
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row className="px-sm-1 px-md-0">
          <Col sm={12} md={6}>
              <Form.Label>Nome do representante</Form.Label>
              <Form.Control value={form.nome} onChange={handleChange("nome")} required type="text" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Razão Social</Form.Label>
              <Form.Control value={form.razao} onChange={handleChange("razao")} required type="text" />
            </Col>
          </Row>
          <Row className="px-sm-1 px-md-0">
            <Col sm={12} md={6}>
              <Form.Label>Telefone do Representante</Form.Label>
              <Form.Control value={form.telefone} onChange={handleChange("telefone")} required type="text" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>E-mail do Representante</Form.Label>
              <Form.Control value={form.email} onChange={handleChange("email")} required type="email" />
            </Col>
          </Row>
        </>
      )}

      <Row className="px-sm-1 px-md-0">
        <Col sm={12} md={6}>
          <Form.Label>Categorias</Form.Label>
          <Form.Control value={form.categoria} onChange={handleChange("categoria")} as="select">
            <option>Agências</option>
            <option>Aplicativos</option>
            <option>Automação</option>
            <option>Consultoria</option>
            <option>Contabilidade</option>
            <option>CRM</option>
            <option>Cursos</option>
            <option>Desenvolvimento</option>
            <option>Estoque virtual</option>
            <option>Força de vendas</option>
            <option>Hubs</option>
            <option>Marketplaces</option>
            <option>Outros</option>
            <option>Parceiros de indicação</option>
            <option>Plataformas de lojas virtuais</option>
            <option>Sistemas de logística</option>
            <option>Soluções financeiras</option>
          </Form.Control>
        </Col>
        <Col sm={12} md={6}>
          {/* <Form.Label>Logotipo</Form.Label>
          <input type="file" className="btn btn-outline-primary" /> */}
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
          {/* <Form.File
            className="position-relative btn btn-outline-primary"
            required
            inputAs="button"
            name="file"
            label="Logotipo"
            // onChange={handleChange}
            feedbackTooltip
          /> */}
          {/* <Form.Label>Logotipo</Form.Label>
          <br />
          <Button className="px-3" variant="outline-primary">
            Anexar
          </Button> */}
        </Col>
      </Row>
      <FormButtons />
    </>
  );
}
