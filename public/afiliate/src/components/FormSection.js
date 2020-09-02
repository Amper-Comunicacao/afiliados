import React from "react";
import { Container,Form,Row } from "react-bootstrap";
import FormAffiliate from "./FormAffiliate";
import SectionTitle from "./SectionTitle";
import MultiStep from "./MultiStep";

export default function FormSection() {
  return (
    <>
      <Container>
        <SectionTitle
          title={"START EARNING TODAY"}
          subtitle={"Be part of the team in three easy steps"}
        />
      </Container>
      <Container>
        <Form className="affiliate-form">
          <Row>
            <MultiStep />
          </Row>
          <FormAffiliate/>
        </Form>
      </Container>
    </>
  );
}
