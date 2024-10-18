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
  });

  const tools = [
    "Typescript",
    "Javscript",
    "SASS",
    "CSS",
    "C#",
    "HTML",
    "ReactJS",
    "jQuery",
    "Redux",
    "HTML",
    "REST",
    "SQL",
    "S3",
    "ASP.NET",
    "AWS",
    "npm",
    "UIkit",
    "Tailwind",
    "EC2",
    "Bootstrap",
    "Wordpress",
    "Firebase",
    "React Native",
    "Context API",
    "Git",
  ];
  const options = {
    radius: 280,
  };

  return (
    <>
      <div className="uk-section section uk-padding" id="about">
        <div className="uk-container">
          <div>
            <h3
              className="heading-left"
              data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 500;"
            >
              About Me<span className="heading-line"></span>
            </h3>
          </div>
          <div
            className="uk-grid-match uk-child-width-1-2@m  uk-flex"
            data-uk-grid
          >
            <div
              className="about-me"
              data-uk-scrollspy="cls: uk-animation-slide-left; delay: 900;"
            >
              <div>
                <p className="leader">
                  Hi! I'm Shahid. I'm a software engineer with a keen eye for
                  design and a passion for fusing great design with beautiful
                  code.
                </p>
                <p>
                  I attended the University of Ghana, where I earned a degree in
                  Computer Engineering. Presently, I am employed as a software
                  engineer. I regard my profession as an ongoing learning
                  journey, actively seeking opportunities to collaborate with
                  individuals who share my enthusiasm for sharing and acquiring
                  knowledge.
                </p>

                <p>
                  My software engineering experience spans a wide spectrum,
                  encompassing everything from front-end applications utilizing
                  REST APIs to full-stack web projects using tools like
                  PostgreSQL, HTML, CSS, React, and ASP.NET. My expertise also
                  extends to crafting engaging UI effects, animations, and
                  creating dynamic, intuitive user interfaces. In addition, an
                  AWS Cloud Practitioner, I seamlessly integrate cloud services
                  into my projects, ensuring scalability, security, and optimal
                  performance.
                </p>

                <p>
                  I love discovering new and better ways to create seamless user
                  experiences with clean, efficient, and scalable code.My main
                  objective is to create something beautiful with people who
                  bring out the best in me, at the end of the day.
                </p>
              </div>
            </div>
            <div
              className=""
              data-uk-scrollspy="cls: uk-animation-slide-right; delay: 900;"
            >
              <div className="tagCloud"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
