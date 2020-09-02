import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Col, Row, Form, Button } from "react-bootstrap";

export default function MultiStep() {
  const appContext = useContext(AppContext);
  const { step } = appContext;

  return (
    <Col className="steps d-flex pl-0 pb-5">
      <div className={"step " + (step>=1? "complete": "")}>1</div>
      <div className={"stepline " + (step>=2? "complete": "")}></div>
      <div className={"step " + (step>=2? "complete": "")}>2</div>
      <div className={"stepline " + (step>=3? "complete": "")}></div>
      <div className={"step " + (step>=3? "complete": "")}>3</div>
    </Col>
  );
}
