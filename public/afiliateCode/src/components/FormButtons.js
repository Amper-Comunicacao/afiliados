import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";

export default function FormButtons() {
  const appContext = useContext(AppContext);
  const { totalSteps, step, prevStep, nextStep } = appContext;
  return (
    <Row className="mt-3 mb-5">
      <Col sm={6} className="d-flex flex-column">
        {step > 1 && (
          <Button className="mt-1 py-3 mb-1 voltar-btn" variant="info" onClick={prevStep}>
            &lt; Voltar
          </Button>
        )}
      </Col>
      <Col sm={6} className="d-flex flex-column">
        {step !== totalSteps ? (
          <Button className="mt-1 py-3 mb-1" variant="secondary" type="submit">
            Continuar &gt;
          </Button>
        ) : (
          <Button className="mt-1 py-3 mb-1" variant="secondary" type="submit">
            Enviar
          </Button>
        )}
      </Col>
    </Row>
  );
}
