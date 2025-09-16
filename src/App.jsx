import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Publications from "./components/Publications";
import Research from "./components/Research";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Responsibility from "./components/Responsibility";
import ExtraCurricular from "./components/ExtraCurricular";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Education />
        <Publications />
        <Research />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        {/* <Responsibility />
        <ExtraCurricular /> */}
        <Contact />
      </main>
    </div>
  );
}
