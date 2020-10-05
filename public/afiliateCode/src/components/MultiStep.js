import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";

export default function MultiStep() {
  const appContext = useContext(AppContext);
  const { step } = appContext;

  return (
    <>
      <Row>
        <Col className="steps d-flex px-3 pb-1 px-md-0">
          <div className={"step " + (step >= 1 ? "complete" : "")}>1</div>
          <div className={"stepline " + (step >= 2 ? "complete" : "")}></div>
          <div className={"step " + (step >= 2 ? "complete" : "")}>2</div>
          <div className={"stepline " + (step >= 3 ? "complete" : "")}></div>
          <div className={"step " + (step >= 3 ? "complete" : "")}>3</div>
          <div className={"stepline " + (step >= 4 ? "complete" : "")}></div>
          <div className={"step " + (step >= 4 ? "complete" : "")}>4</div>
        </Col>
      </Row>
      <Row className="step-labels">
        <Col className="d-flex justify-content-between px-3 px-md-2 pb-3 pb-md-5">
          <span className={step >= 1 ? "complete" : ""}>Dados Pessoais</span>
          <span className={(step >= 2 ? "complete" : "")+ " ml-md-3"}>Endereço</span>
          <span className={(step >= 3 ? "complete" : "") + " ml-md-5"}>{"  "}Documentos</span>
          <span className={step >= 4 ? "complete" : ""}>Dados Bancários</span>
        </Col>
      </Row>
    </>
  );
}
