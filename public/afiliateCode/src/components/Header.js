import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
} from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/c2tours.svg";

export default function Header() {
  return (
    <Navbar className="main-header" bg="white" expand="sm">
      <Container>
        <Navbar.Brand href="/">
          <Logo className="brand-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="English" id="basic-nav-dropdown">
              <NavDropdown.Item>Spanish</NavDropdown.Item>
              <NavDropdown.Item>Portuguese</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
