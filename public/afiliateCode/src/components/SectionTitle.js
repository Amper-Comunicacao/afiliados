import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function SectionTitle({ title, subtitle }) {
  return (
    <Container>
      <Row>
        <Col className="section-title text-center mx-auto py-5" sm={6}>
          <h3>{title}</h3>
          {(subtitle &&
            <span>{subtitle}</span>
          )}
        </Col>
      </Row>
    </Container>
  );
}
