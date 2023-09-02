import React from 'react';
import '../css/app.css';
import Home from "./home"
import AboutMe from './aboutMe';
import NavbarComponenet  from "./navbar.js"
import ParticleComponent from './ParticleComponent';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import TechStack from './techStack';

const App = () => {

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <>
    <ParticleComponent/>
    <NavbarComponenet/>  
    <Home/>
    <AboutMe/>
    <TechStack/>
    </>
  )
}

export default App;
