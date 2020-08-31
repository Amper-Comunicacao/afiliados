import React from "react";
import { Col } from "react-bootstrap";
export default function Reason({ children, title, subtitle }) {
  return (
    <Col className="reason" sm={12} md={4}>
      {children}
      <strong>{title}</strong>
      <span>{subtitle}</span>
    </Col>
  );
}
