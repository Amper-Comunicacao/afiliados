import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Reason from "./Reason";
import { ReactComponent as PlanetIcon } from "../assets/planet-ringed-light.svg";
import { ReactComponent as UserIcon } from "../assets/user-tie-light.svg";
import { ReactComponent as ChartIcon } from "../assets/chart-pie-light.svg";
import { ReactComponent as CoinsIcon } from "../assets/coins-light.svg";
import { ReactComponent as BadgeIcon } from "../assets/badge-percent-light.svg";
import { ReactComponent as ShapesIcon } from "../assets/shapes-light.svg";
import SectionTitle from "./SectionTitle";

export default function ReasonsSection() {
  return (
    <>
      <SectionTitle title={"WHY SHOULD I JOIN KLOOK'S AFFILIATE PARTNER PROGRAM?"}/>
      <Container>
        <Row>
          <Reason title={"Over 300+ Destinations"} subtitle={"Our 100,000+ activities across 300+ destinations will help your visitors easily create their ideal travel itineraries"}>
            <PlanetIcon />
          </Reason>
          <Reason title={"Up to 5% Commission + Bonus"} subtitle={"Earn up to 5% of Klook sales! On the top of that, if you are able to convert your traffic into higher earnings get rewarded with several bonus commissions levels!"}>
            <CoinsIcon />
          </Reason>
          <Reason title={"Easy Integration"} subtitle={"You don't have to be an engineer to create your account! With our step-by-step guide, it only takes you couple minutes to set up your own tracking, and you'll be up and running before you know it."}>
            <ShapesIcon />
          </Reason>
        </Row>
        <Row>
          <Reason title={"Dedicated Account Manager"} subtitle={"Be assigned a dedicated Account Manager who will ensure mutual growth while working towards the goal of providing the best products for you and your visitors."}>
            <UserIcon />
          </Reason>
          <Reason title={"Free Promotional Tools"} subtitle={"We provide easy-to-use promotional tools to help optimize your website visits into conversion. You can also customize the contents based on your target audience."}>
            <BadgeIcon />
          </Reason>
          <Reason title={"Real Time Analytics & Reports"} subtitle={"Want to know how your advertisement perform in a glance? Not a problem! Our platform aims to help you to optimize your performance based on real time data."}>
            <ChartIcon />
          </Reason>
        </Row>
      </Container>
    </>
  );
}
