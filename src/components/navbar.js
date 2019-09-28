import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
          <div className="container">
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
          </div>
        
      </Navbar>
    );
  }
}

export default NavBar;
