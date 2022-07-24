import "./About.scss";
import TagCloud from "TagCloud";
import { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    var cloudContainer = document.querySelector<HTMLElement>(".tagCloud");
    var cloud = document.querySelectorAll(".tagcloud");
    if (cloud.length === 1) {
      return;
    } else if (!cloudContainer.classList.contains("tagcloud")) {
      TagCloud(".tagCloud", tools, options);
    }
  }, []);

  const tools = [
    "Typescript",
    "Javscript",
    "SASS",
    "C#",
    "HTML",
    "ReactJS",
    "jQuery",
    "Redux",
    "HTML",
    "REST",
    "SQL",
    "ASP.NET",
    "npm",
    "UIkit",
    "Bootstrap",
    "Wordpress",
    "Git",
  ];
  const options = {
    radius: 280,
  };
  /* function setTagColors() {
    var cloud = document.querySelectorAll(".tagcloud");
    var tool = document.querySelector("span");
  } */

  return (
    <>
      <div className="uk-section section uk-padding" id="about">
        <div className="uk-container">
          <h3
            className="heading"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400;"
          >
            About Me
          </h3>
          <div
            className="uk-grid-match uk-child-width-1-2@m  uk-flex"
            data-uk-grid
          >
            <div className="about-me">
              <div>
                <p className="leader">
                  Hi! I'm Shahid. I'm a software engineer with a keen eye for
                  design and a passion for fusing great design with beautiful
                  code.
                </p>
                <p>
                  I studied computer engineering at University of Ghana and I'm
                  currently working as a software engineer. I view my work as
                  continual education, and I'm constantly looking for chances to
                  collaborate with people who are as eager to offer their
                  knowledge as I am to absorb it.
                </p>

                <p>
                  My experience in web development extends from simple front-end
                  applications that utilize REST apis to full stack web projects
                  with a variety of tools and frameworks like PostgreSQL, HTML,
                  CSS, React and ASP.NET. I'm incredibly passionate about UI
                  effects, animations, and developing dynamic, intuitive user
                  interfaces.
                </p>
                <p>
                  I love discovering new and better ways to create seamless user
                  experiences with clean, efficient, and scalable code.My main
                  objective is to create something beautiful with people who
                  bring out the best in me, at the end of the day.
                </p>
              </div>
            </div>
            <div className="">
              <div className="tagCloud"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
