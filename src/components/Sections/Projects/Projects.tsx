import FeaturedProjects from "../../FeaturedProjects/component";
import { featuredProjects, otherProjects } from "../../../data/info";
import "./Projects.scss";
import OtherProjects from "../../OtherProjects/component";

const Projects: React.FC = () => {
  return (
    <>
      <div className="uk-section section uk-padding" id="projects">
        <div className="uk-container">
          <h3
            className="heading-left"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400;"
          >
            Some of My Work <span className="heading-line"></span>
          </h3>

          <div className="uk-padding">
            <ul className="projects-list">
              {featuredProjects.map((project, index) => (
                <li key={index} className="uk-margin list-item">
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
            className="heading uk-text-center"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400;"
          >
            Other projects
          </h3>

          <div
            className="uk-child-width-1-3@m uk-grid-small uk-grid-match"
            data-uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500;"
            data-uk-grid
          >
            {otherProjects.map((project, index) => (
              <li key={index} className="">
                <OtherProjects data={project}></OtherProjects>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
