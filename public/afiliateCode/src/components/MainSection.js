import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Col, Container, Row } from "react-bootstrap";

export default function MainSection() {
  const appContext = useContext(AppContext);
  const { translation } = appContext;
  return (
    <Container className="main-section" fluid>
      <Container>
        <Row>
          <Col className="px-3 content mr-auto" sm={12} lg={8}>
            <h1>
              {translation.mainTitle1}
              <br />
              {translation.mainTitle2}
            </h1>
            <br />
            <span>
            {translation.mainDesc}
            </span>
            <br />
            <br />
            <a href={"#form-section"}>
              <button>{translation.mainButton}</button>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
