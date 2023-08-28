import '../css/app.css';
import Home from "./home"
import AboutMe from './aboutMe';
import NavbarComponenet  from "./navbar.js"
import ParticleComponent from './ParticleComponent';


const App = () => {

  return (
    <>
    <ParticleComponent/>
    <NavbarComponenet/>
    <Home/>
    <AboutMe/>
    </>
    
  )
}

export default App;
