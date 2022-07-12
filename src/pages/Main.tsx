import About from "../components/Sections/About/About";
import Contact from "../components/Sections/Contact/Contact";
import Home from "../components/Sections/Home/Home";
import Projects from "../components/Sections/Projects/Projects";
import Skills from "../components/Sections/Skills/Skills";

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
