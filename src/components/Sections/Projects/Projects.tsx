import { useEffect } from "react";
import FeaturedProjects from "../../FeaturedProjects/component";
import { featuredProjects } from "../../../data/info";
import "./Projects.scss";

const Projects: React.FC = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const bar = entry.target.querySelector(".progress");

      if (entry.isIntersecting) {
        bar.classList.add("animate");
        return;
      }
      bar.classList.remove("animate");
    });
  });

  useEffect(() => {
    document.querySelectorAll(".chart").forEach((footer) => {
      observer.observe(footer);
    });
  }, []);
  return (
    <>
      <div className="uk-section section uk-padding" id="projects">
        <div className="uk-container">
          <h3
            className="heading"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400;"
          >
            Some of My Work
          </h3>

          <div className="uk-padding">
            <ul className="projects-list">
              {featuredProjects.map((project, index) => (
                <li key={index} className="uk-margin">
                  <FeaturedProjects
                    data={project}
                    className={
                      index % 2 !== 0 ? "slide-in-right" : "slide-in-left"
                    }
                    invert={index % 2 !== 0 ? false : true}
                  ></FeaturedProjects>
                </li>
              ))}
            </ul>
          </div>

          <h3
            className="heading"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400;"
          >
            Other projects
          </h3>

          <div
            className="uk-child-width-1-3@m uk-padding uk-grid-small uk-grid-match"
            data-uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
            data-uk-grid
          >
            <div>
              <div className="folder uk-card uk-card-default uk-card-body uk-margin-right">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div>
              <div className="folder uk-card uk-card-default uk-card-body uk-margin-right">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div>
              <div className="folder uk-card uk-card-default uk-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
