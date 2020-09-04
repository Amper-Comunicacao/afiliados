import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
} from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/c2tours.svg";

export default function Header() {
  const appContext = useContext(AppContext);
  const { changeLanguage, language } = appContext;
  return (
    <Navbar className="main-header" bg="white" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <Logo className="brand-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title={language} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=> changeLanguage("English")}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={()=> changeLanguage("Spanish")}>Spanish</NavDropdown.Item>
              <NavDropdown.Item onClick={()=> changeLanguage("Portuguese")}>Portuguese</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
