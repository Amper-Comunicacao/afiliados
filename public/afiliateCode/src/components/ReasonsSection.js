import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { Container, Row } from "react-bootstrap";
import Reason from "./Reason";
import { ReactComponent as PlanetIcon } from "../assets/planet-ringed-light.svg";
import { ReactComponent as UserIcon } from "../assets/user-tie-light.svg";
import { ReactComponent as ChartIcon } from "../assets/chart-pie-light.svg";
import { ReactComponent as CoinsIcon } from "../assets/coins-light.svg";
import { ReactComponent as BadgeIcon } from "../assets/badge-percent-light.svg";
import { ReactComponent as ShapesIcon } from "../assets/shapes-light.svg";
import SectionTitle from "./SectionTitle";

export default function ReasonsSection() {
  const appContext = useContext(AppContext);
  const { translation } = appContext;
  return (
    <>
      <SectionTitle
        title={translation.reasonTitle}
      />
      <Container>
        <Row>
          <Reason
            title={translation.reasons[0].title}
            subtitle={translation.reasons[0].subtitle}
          >
            <PlanetIcon />
          </Reason>
          <Reason
            title={translation.reasons[1].title}
            subtitle={translation.reasons[1].subtitle}
          >
            <CoinsIcon />
          </Reason>
          <Reason
            title={translation.reasons[2].title}
            subtitle={translation.reasons[2].subtitle}
          >
            <ShapesIcon />
          </Reason>
        </Row>
        <Row>
        <Reason
            title={translation.reasons[3].title}
            subtitle={translation.reasons[3].subtitle}
          >
            <UserIcon />
          </Reason>
          <Reason
            title={translation.reasons[4].title}
            subtitle={translation.reasons[4].subtitle}
          >
            <BadgeIcon />
          </Reason>
          <Reason
            title={translation.reasons[5].title}
            subtitle={translation.reasons[5].subtitle}
          >
            <ChartIcon />
          </Reason>
        </Row>
      </Container>
    </>
  );
}
