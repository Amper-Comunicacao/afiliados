import React from "react";
import {Container } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import PartnerImg from "../assets/partner.png";

export default function PartnersSection() {
  return (
    <Container className="bg-light" fluid>
      <SectionTitle
        title={"OUR PARTNERS"}
        subtitle={
          "Klook is proud to work with over 10,000 of the world's leading brands and attractions"
        }
      />
      <Container>
        <div className="part-imgs d-flex">
          <div className="d-flex flex-wrap">
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
            <img src={PartnerImg} alt="" />
          </div>
        </div>
      </Container>
    </Container>
  );
}
