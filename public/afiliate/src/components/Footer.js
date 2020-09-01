import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as PlanetIcon } from "../assets/planet-ringed-light.svg";
import { ReactComponent as UserIcon } from "../assets/user-tie-light.svg";
import { ReactComponent as ChartIcon } from "../assets/chart-pie-light.svg";
import { ReactComponent as CoinsIcon } from "../assets/coins-light.svg";
import { ReactComponent as BadgeIcon } from "../assets/badge-percent-light.svg";
import { ReactComponent as ShapesIcon } from "../assets/shapes-light.svg";

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
              <h5 class="text-uppercase text-light pb-2">
                C2 Rio Viagens e Turismo Ltda
              </h5>
              <ul class="list-unstyled text-gray-dark">
                <li>
                  <strong class="text-white">CNPJ:</strong> 05.873.416/0001-38
                </li>
              </ul>
              <p class="text-gray-dark">
                <i class="fa-fw fal fa-map-marker-alt text-white"></i> Rua da
                Quitanda, 60/11º andar - Centro <br />
                Rio de Janeiro | Brazil
              </p>
              <ul class="list-unstyled text-light">
                <li>
                  <i
                    class="fa-fw fal fa-phone text-white"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="tel:+552135045730"
                    class="text-gray-dark"
                    title="Clique para chamar"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
                    +55 21 3504-5730
                  </a>
                </li>
                <li>
                  <i
                    class="fa-fw fab fa-whatsapp text-white"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="https://api.whatsapp.com/send?phone=552135045730"
                    class="text-gray-dark"
                    title="Clique para chat"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
                    +55 21 3504-5730
                  </a>
                </li>
                <li>
                  <i
                    class="fa-fw fal fa-envelope text-white"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="mailto:info@c2.tours?subject=Question%20to%20C2Tours&amp;body=Dear%20C2Tours,%0D%0A"
                    title="Enviar e-mail"
                    class="text-gray-dark"
                    data-toggle="tooltip"
                    data-placement="top"
                  >
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
              <h5 class="text-uppercase text-light pb-2"> Políticas de Uso</h5>
              <ul class="list-unstyled pb-5 pb-md-2">
                <li>
                  <a
                    href="/termos-e-condicoes"
                    title="Termos e condições"
                    class="text-gray-dark"
                  >
                    Termos e Condições
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-privacidade"
                    title="Política de privacidade"
                    class="text-gray-dark"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/cookies" title="Cookies" class="text-gray-dark">
                    Cookies
                  </a>
                </li>
              </ul>

              <h5 class="text-uppercase text-light pb-1"> Ajuda</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="/quem-somos" title="" class="text-gray-dark">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a
                    href="/perguntas-frequentes"
                    title=""
                    class="text-gray-dark"
                  >
                    Perguntas frequentes
                  </a>
                </li>
                <li>
                  <a href="/fale-conosco" title="" class="text-gray-dark">
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
              <h5 class="text-uppercase text-light pb-2"> Mídias Sociais </h5>

              <div class="col-12 col-sm text-center text-md-left order-1 order-sm-2 mb-0 mb-md-4 social-medias">
                <a
                  target="_blank"
                  href="https://www.tripadvisor.com.br/Attraction_Review-g303506-d9555526-Reviews-C2Rio_Tours_Travel-Rio_de_Janeiro_State_of_Rio_de_Janeiro.html"
                  title=""
                  class="text-white pr-3"
                >
                  <i class="fab fa-lg fa-tripadvisor" aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/c2rio.travel/"
                  title=""
                  class="text-white pr-3"
                >
                  <i class="fab fa-lg fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/c2rio.travel/"
                  title=""
                  class="text-white pr-3"
                >
                  <i
                    class="fab fa-lg fa-facebook-square"
                    aria-hidden="true"
                  ></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCybLPpChwLF4xKIV6-kqhmA"
                  title=""
                  class="text-white"
                >
                  <i class="fab fa-lg fa-youtube" aria-hidden="true"></i>
                </a>
              </div>

              <h5 class="text-uppercase text-light pb-1 pt-5 pt-md-0">
                Trabalhe Conosco
              </h5>
              <ul class="list-unstyled pt-0">
                <li>
                  <a
                    href="https://c2rio.travel/suppliers"
                    title=""
                    class="text-gray-dark"
                  >
                    Fornecedores
                  </a>
                </li>
                <li>
                  <a title="" class="text-gray-dark d-none">
                    Afiliados
                  </a>
                </li>
                <li>
                  <a title="" class="text-gray-dark d-none">
                    Agências
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.talentbrand.com.br/companies/c2rio"
                    target="_blank"
                    title=""
                    class="text-gray-dark"
                  >
                    Vagas
                  </a>
                </li>
              </ul>

              <h5 class="text-uppercase text-light pb-1 pt-5 pt-md-2">
                Receba as Últimas Ofertas
              </h5>

              <div class="input-group mb-3">
                <form
                  action="https://c2rio.us19.list-manage.com/subscribe/post?u=437ea26e164d8165c637d13ab&amp;id=52bd4cf385"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  class="validate newsBottom"
                  target="_blank"
                  novalidate=""
                >
                  <div class="d-flex justify-content-center div-email">
                    <div class="col-10 p-0">
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        class="form-control border-0 email"
                        placeholder=" Seu e-mail"
                        aria-label="Digite seu e-mail"
                        aria-describedby="button-addon2"
                        required=""
                      />
                    </div>
                    <div class="input-group-append col-2 p-0">
                      <input
                        type="submit"
                        value="Ok"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        class="btn news-button rounded-0"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <div class="col-12 col-md-8 text-center text-md-left">
              <img
                src="https://c2rio.travel/src/imgs/logo-abav.png"
                alt=""
                class="py-4 pr-2 pl-2 py-md-4 pr-md-4"
              />
              <img
                src="https://c2rio.travel/src/imgs/logo_cadastur.png"
                alt=""
                class="py-4 pl-2 pr-2 py-md-4 pl-md-4"
              />
            </div>
            <div className="col-12 col-md-4 d-flex flex-column">
              <h6 class="text-white font-weight-light text-uppercase pt-4 pb-2">
                Pagamento Seguro
              </h6>
            </div>
          </Row>
        </Container>
      </Container>
      <Container className="bg-primary" fluid>
        <Container>
          <Row className="px-3 pt-5 pb-4">
            <div class="col-12 col-sm text-white text-center text-md-left order-1 order-sm-1">
              <p>Copyright © 2020 C2Tours</p>
            </div>
            <div class="col-12 col-sm text-center text-md-right order-2 order-sm-2 pt-4 pt-sm-0">
              <a
                href="https://ampercomunicacao.com.br/"
                title="Desenvolvido por Ampersand"
                target="_blank"
                class="text-uppercase"
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
