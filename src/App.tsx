import Header from "./componants/Header";
import Hero from "./componants/Hero";
import About from "./componants/About";
import Experience from "./componants/Experience";
import Projects from "./componants/Projects";
import Skills from "./componants/Skills";
import EmailMe from "./componants/EmailMe";
import Contact from "./componants/Contact";

export default function App() {
  return (
    <div className="portfolio-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EmailMe />
        <Contact />
      </main>
      <footer>Built by Kapil · Pune, India</footer>
    </div>
  );
}
