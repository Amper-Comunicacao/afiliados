import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";

export default function FormBank() {
  const appContext = useContext(AppContext);
  const { prevStep, nextStep } = appContext;
  return (
    <>
      <Row>
        <Col sm={12} md={6} className="px-sm-1 px-md-0">
          <Form.Label>Eu Sou</Form.Label>
          <Form.Control as="select">
            <option>Pessoa jurídica</option>
            <option>Pessoa física</option>
          </Form.Control>
          <Form.Label>CPF/CPNJ</Form.Label>
          <Form.Control type="text" placeholder="CPF/CPNJ" />
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="text" placeholder="Telefone" />
        </Col>
        <Col sm={12} md={6}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Label>Categorias</Form.Label>
          <Form.Control as="select">
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
          <Form.Label>Logotipo</Form.Label>
          <br />
          <Button className="px-3" variant="secondary">
            Anexar
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex">
          <Col className="d-flex justify- px-5">
            <Button
              className="mr-auto mt-3 mb-5 px-5"
              variant="secondary"
              onClick={prevStep}
            >
              Voltar
            </Button>
            <Button
              className="ml-auto mt-3 mb-5 px-5"
              variant="secondary"
              onClick={nextStep}
            >
              Continuar
            </Button>
          </Col>

          {/* <Button
            className="mx-auto mt-3 mb-5 px-5"
            variant="secondary"
            type="submit"
          >
            Submit
          </Button> */}
        </Col>
      </Row>
    </>
  );
}
