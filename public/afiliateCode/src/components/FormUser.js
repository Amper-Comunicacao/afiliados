import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";

export default function FormUser() {

  const appContext = useContext(AppContext);
  const { nextStep } = appContext;

  return (
    <>
      <Row>
        <Col sm={12} md={6} className="px-sm-1 px-md-0">
          <Form.Label>Nome Razão Social</Form.Label>
          <Form.Control type="text" placeholder="Nome Razão Social" />
          <Form.Label>CEP</Form.Label>
          <Form.Control type="text" placeholder="CEP" />
          <Form.Label>Endereço</Form.Label>
          <Form.Control type="text" placeholder="Endereço" />
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" placeholder="Bairro" />
        </Col>
        <Col sm={12} md={6}>
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" placeholder="Cidade" />
          <Form.Label>UF</Form.Label>
          <Form.Control type="text" placeholder="UF" />
          <Form.Label>Complemento</Form.Label>
          <Form.Control type="text" placeholder="Complemento" />
          <Form.Label>Número</Form.Label>
          <Form.Control type="text" placeholder="Número" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex px-5">
          <Button
            className="ml-auto mt-3 mb-5 px-5"
            variant="secondary"
            onClick={nextStep}
          >
            Continuar
          </Button>
        </Col>
      </Row>
    </>
  );
}
