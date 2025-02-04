import React from 'react';
import '../css/app.css';
import Container from 'react-bootstrap/Container';
import MySection from './MySection.js';
import AboutMe from './AboutMe.js';
import NavbarComponenet  from "./Navbar.js"
import ParticleComponent from './ParticleComponent';
import TechStack from './TechStack.js';
import Skills from './Skills.js';
import Resume from './Resume.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import Fotter from './Fotter.js';

const App = () => {

  return (
    <>
    <NavbarComponenet/> 
    <Container>
      <ParticleComponent/>
      <MySection/>
      <AboutMe/>
      <TechStack/>
      <Skills/>
      <Contact/>
      <Projects/>
      <Resume/>
    </Container>
    <Fotter/>
    </>
  )
}

export default App;
