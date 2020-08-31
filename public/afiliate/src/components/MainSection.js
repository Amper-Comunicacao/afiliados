import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function MainSection() {
  return (
    <Container className="main-section" fluid>
      <Container>
      <Row>
        <Col className="px-3 content mr-auto" sm={12} lg={8}>
          <h1>MONETIZE WEBSITE TRAFFIC.<br/>
          EARN COMMISSION TODAY!</h1>
          <br/>
          <span>
            With a portfolio of over 100,000 in-destination activities
            worldwide, Klook’s Affiliate Partner Program is the leading program
            of its kind in the world. Our products provide the most competitive
            rates in the market, ensuring the highest conversions and earning
            you significant commission.
          </span>
          <br/>
          <br/>
          <button>Join Now</button>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}
