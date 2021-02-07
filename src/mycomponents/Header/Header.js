import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <div className="header">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React.js</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Portfolio</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
export default Header;
