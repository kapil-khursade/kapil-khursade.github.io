import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  const setTitleAndBg = (title) => {
    document.title = `Kapil | ${title}`;
    return "activeLinkStyle";
  };

  return (
    <Navbar variant="dark" bg="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand >Kapil Khursade</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav> {/* Empty Nav to push Nav.Links to the right */}
          <Nav className="justify-content-end">
            <NavLink className={(e)=>{return e.isActive? setTitleAndBg("My Section") : ''}} to="/">My Section</NavLink>
            <NavLink className={(e)=>{return e.isActive? setTitleAndBg("About Me") : ''}} to="/about_me">About Me</NavLink>
            <NavLink className={(e)=>{return e.isActive? setTitleAndBg("Tech Stack") : ''}} to="/tech_stack">Tech Stack</NavLink>
            <NavLink className={(e)=>{return e.isActive? setTitleAndBg("Skills") : ''}} to="/skills">Skills</NavLink>
            <NavLink className={(e)=>{return e.isActive? setTitleAndBg("Project") : ''}} to="/project">Project</NavLink>
            <NavLink className={(e)=>{return e.isActive? setTitleAndBg("Contact Me") : ''}} to="/contact_me">Contact Me</NavLink>
            <NavLink className={(e)=>{return e.isActive? setTitleAndBg("Resume") : ''}} to="/resume">Resume</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

