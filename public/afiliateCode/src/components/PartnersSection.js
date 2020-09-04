import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {Container } from "react-bootstrap";
import SectionTitle from "./SectionTitle";
import PartnerBeto from "../assets/partners-beto-carreiro.png";
import PartnerBohemia from "../assets/partners-bohemia.png";
import PartnerGinga from "../assets/partners-ginga-tropical.png";
import PartnerHotBeach from "../assets/partners-hot-beach-olimpia.png";
import PartnerRioScenarium from "../assets/partners-rio-scenarium.png";
import PartnerRioStar from "../assets/partners-rio-star.png";

export default function PartnersSection() {
  const appContext = useContext(AppContext);
  const { translation } = appContext;
  return (
    <Container className="bg-light" fluid>
      <SectionTitle
        title={translation.partTitle}
        subtitle={translation.partSubtitle}
      />
      <Container>
        <div className="part-imgs d-flex">
          <div className="d-flex flex-wrap">
            <img src={PartnerBeto} alt="" />
            <img src={PartnerBohemia} alt="" />
            <img src={PartnerGinga} alt="" />
            <img src={PartnerHotBeach} alt="" />
            <img src={PartnerRioScenarium} alt="" />
            <img src={PartnerRioStar} alt="" />
          </div>
        </div>
      </Container>
    </Container>
  );
}
