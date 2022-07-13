import { useEffect } from "react";
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
          <h3 className="heading">Some of My Work</h3>

          <div className="">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
          </div>
          <div
            className="uk-child-width-1-3@m uk-padding uk-grid-small uk-grid-match"
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
