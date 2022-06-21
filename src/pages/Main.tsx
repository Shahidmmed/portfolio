import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Home from "../components/Sections/Home";
import Projects from "../components/Sections/Projects";
import Skills from "../components/Sections/Skills";

const Main: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Main;
