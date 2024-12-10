import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import IconBar from './IconBar';

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">Exclusive</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href='/home'>Home</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href='/signup'>SignUp</Nav.Link>
        </Nav>
        <IconBar />
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
