import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home">Kapil Khursade</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav> {/* Empty Nav to push Nav.Links to the right */}
          <Nav className="justify-content-end">
            <Nav.Link href="#my_section">My Section</Nav.Link>
            <Nav.Link href="#about_me">About Me</Nav.Link>
            <Nav.Link href="#tech_stack">Tech Stack</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact_me">Contact Me</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

