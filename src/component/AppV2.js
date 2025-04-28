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
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppV2 = () => {

    const router = createBrowserRouter([
        {
        path: '/',
        element: <><NavbarComponenet/><MySection/></>
        },
        {
            path: '/about_me',
            element: <><NavbarComponenet/><AboutMe/></>
        },
        {
            path: '/tech_stack',
            element: <><NavbarComponenet/><TechStack/></>
        },
        {
            path: '/skills',
            element: <><NavbarComponenet/><Skills/></>
        },
        {
            path: '/contact_me',
            element: <><NavbarComponenet/><Contact/></>
        },
        {
            path: '/project',
            element: <><NavbarComponenet/><Projects/></>
        },
        {
            path: '/resume',
            element: <><NavbarComponenet/><Resume/></>
        },
])

  return (
    <>
    <ParticleComponent/>
    <RouterProvider router={router}/>
    <Fotter/>
    </>
  )
}

export default AppV2;
