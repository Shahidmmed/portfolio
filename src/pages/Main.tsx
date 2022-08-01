import About from "../components/Sections/About/About";
import Contact from "../components/Sections/Contact/Contact";
import Home from "../components/Sections/Home/Home";
import Projects from "../components/Sections/Projects/Projects";
import Skills from "../components/Sections/Skills/Skills";
import "./Sections.scss";

const Main: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
    </>
  );
};

export default Main;
