import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as MapIcon } from "../assets/map-marker-alt-light.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone-light.svg";
import { ReactComponent as WhatsappIcon } from "../assets/whatsapp-brands.svg";
import { ReactComponent as EnvelopeIcon } from "../assets/envelope-light.svg";
import { ReactComponent as TripadvisorIcon } from "../assets/tripadvisor-brands.svg";
import { ReactComponent as InstaIcon } from "../assets/instagram-brands.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook-square-brands.svg";
import { ReactComponent as YoutubeIcon } from "../assets/youtube-brands.svg";
import { ReactComponent as AmexIcon } from "../assets/cc-amex-brands.svg";
import { ReactComponent as DinersIcon } from "../assets/cc-diners-club-brands.svg";
import { ReactComponent as VisaIcon } from "../assets/cc-visa-brands.svg";
import { ReactComponent as MasterIcon } from "../assets/cc-mastercard-brands.svg";
import EloIcon from "../assets/elo-logo.png";
import HipercardIcon from "../assets/Hipercard-logo.png";

export default function Footer() {
  return (
    <>
      <Container className="pt-5 lp-footer" fluid>
        <Container>
          <Row className="px-3">
            <Col
              className="text-center text-md-left mb-5 mb-md-0"
              sm={12}
              md={4}
            >
              <h5 className="text-uppercase text-light pb-2">
                C2 Rio Viagens e Turismo Ltda
              </h5>
              <ul className="list-unstyled text-gray-dark">
                <li>
                  <strong className="text-white">CNPJ:</strong>{" "}
                  05.873.416/0001-38
                </li>
              </ul>
              <p className="text-gray-dark">
                <MapIcon /> Rua da Quitanda, 60/11º andar - Centro <br />
                Rio de Janeiro | Brazil
              </p>
              <ul className="list-unstyled text-light">
                <li>
                  <PhoneIcon />
                  <a
                    href="tel:+552135045730"
                    className="text-gray-dark"
                    title="Clique para chamar"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
                    {" "}
                    +55 21 3504-5730
                  </a>
                </li>
                <li>
                  <WhatsappIcon />
                  <a
                    href="https://api.whatsapp.com/send?phone=552135045730"
                    className="text-gray-dark"
                    title="Clique para chat"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
                    {" "}
                    +55 21 3504-5730
                  </a>
                </li>
                <li>
                  <EnvelopeIcon />
                  <a
                    href="mailto:info@c2.tours?subject=Question%20to%20C2Tours&amp;body=Dear%20C2Tours,%0D%0A"
                    title="Enviar e-mail"
                    className="text-gray-dark"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
                    {" "}
                    info@c2.tours
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              className="text-center text-md-left mb-5 mb-md-0"
              sm={12}
              md={4}
            >
              <h5 className="text-uppercase text-light pb-2">
                {" "}
                Políticas de Uso
              </h5>
              <ul className="list-unstyled pb-5 pb-md-2">
                <li>
                  <a
                    href="/termos-e-condicoes"
                    title="Termos e condições"
                    className="text-gray-dark"
                  >
                    Termos e Condições
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-privacidade"
                    title="Política de privacidade"
                    className="text-gray-dark"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/cookies" title="Cookies" className="text-gray-dark">
                    Cookies
                  </a>
                </li>
              </ul>

              <h5 className="text-uppercase text-light pb-1"> Ajuda</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/quem-somos" title="" className="text-gray-dark">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a
                    href="/perguntas-frequentes"
                    title=""
                    className="text-gray-dark"
                  >
                    Perguntas frequentes
                  </a>
                </li>
                <li>
                  <a href="/fale-conosco" title="" className="text-gray-dark">
                    Fale conosco
                  </a>
                </li>
              </ul>
            </Col>
            <Col
              className="text-center text-md-left mb-5 mb-md-0"
              sm={12}
              md={4}
            >
              <h5 className="text-uppercase text-light pb-2">
                {" "}
                Mídias Sociais{" "}
              </h5>

              <div className="col-12 col-sm text-center text-md-left order-1 order-sm-2 mb-0 mb-md-4 social-medias">
                <a
                  target="_blank"
                  href="https://www.tripadvisor.com.br/Attraction_Review-g303506-d9555526-Reviews-C2Rio_Tours_Travel-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html"
                  title=""
                  className="text-white pr-3"
                >
                  <TripadvisorIcon />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/c2rio.travel/"
                  title=""
                  className="text-white pr-3"
                >
                  <InstaIcon />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/c2rio.travel/"
                  title=""
                  className="text-white pr-3"
                >
                  <FacebookIcon />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCybLPpChwLF4xKIV6-kqhmA"
                  title=""
                  className="text-white"
                >
                  <YoutubeIcon />
                </a>
              </div>

              <h5 className="text-uppercase text-light pb-1 pt-5 pt-md-0">
                Trabalhe Conosco
              </h5>
              <ul className="list-unstyled pt-0">
                <li>
                  <a
                    href="https://c2rio.travel/suppliers"
                    title=""
                    className="text-gray-dark"
                  >
                    Fornecedores
                  </a>
                </li>
                <li>
                  <a title="" className="text-gray-dark d-none">
                    Afiliados
                  </a>
                </li>
                <li>
                  <a title="" className="text-gray-dark d-none">
                    Agências
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.talentbrand.com.br/companies/c2rio"
                    target="_blank"
                    title=""
                    className="text-gray-dark"
                  >
                    Vagas
                  </a>
                </li>
              </ul>

              <h5 className="text-uppercase text-light pb-1 pt-5 pt-md-2">
                Receba as Últimas Ofertas
              </h5>

              <div className="input-group mb-3">
                <form
                  action="https://c2rio.us19.list-manage.com/subscribe/post?u=437ea26e164d8165c637d13ab&amp;id=52bd4cf385"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate newsBottom"
                  target="_blank"
                  noValidate=""
                >
                  <div className="d-flex justify-content-center div-email">
                    <div className="col-10 p-0">
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        className="form-control border-0 email"
                        placeholder=" Seu e-mail"
                        aria-label="Digite seu e-mail"
                        aria-describedby="button-addon2"
                        required=""
                      />
                    </div>
                    <div className="input-group-append col-2 p-0">
                      <input
                        type="submit"
                        value="Ok"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="btn news-button rounded-0"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <div className="col-12 col-md-8 text-center text-md-left">
              <img
                src="https://c2rio.travel/src/imgs/logo-abav.png"
                alt=""
                className="py-4 pr-2 pl-2 py-md-4 pr-md-4"
              />
              <img
                src="https://c2rio.travel/src/imgs/logo_cadastur.png"
                alt=""
                className="py-4 pl-2 pr-2 py-md-4 pl-md-4"
              />
            </div>
            <div className="col-12 col-md-4 d-flex flex-column">
              <h6 className="text-white font-weight-light text-uppercase pt-4 pb-2">
                Pagamento Seguro
              </h6>
              <div className="d-flex">
                <AmexIcon />
                <DinersIcon />
                <VisaIcon />
                <MasterIcon />
                <img src={EloIcon} alt=""/>
                <img src={HipercardIcon} alt=""/>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
      <Container className="bg-primary" fluid>
        <Container>
          <Row className="px-3 pt-5 pb-4">
            <div className="col-12 col-sm text-white text-center text-md-left order-1 order-sm-1">
              <p>Copyright © 2020 C2Tours</p>
            </div>
            <div className="col-12 col-sm text-center text-md-right order-2 order-sm-2 pt-4 pt-sm-0">
              <a
                href="https://ampercomunicacao.com.br/"
                title="Desenvolvido por Ampersand"
                target="_blank"
                className="text-uppercase"
              >
                <img
                  src="https://c2rio.travel/src/imgs/amper-logo-dev.svg"
                  alt=""
                  width="40px"
                  fill="#163264"
                />
              </a>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
}
