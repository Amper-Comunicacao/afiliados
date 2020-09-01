import React from "react";
import {Container } from "react-bootstrap";
import FormAffiliate from "./FormAffiliate";
import SectionTitle from "./SectionTitle";

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
        <FormAffiliate/>
      </Container>
    </>
  );
}
