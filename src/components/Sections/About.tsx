import "./Styles.scss";
import TagCloud from "TagCloud";
import { useEffect } from "react";

const About: React.FC = () => {
  function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
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
  ];
  const options = {
    radius: 230,
  };
  /* function setTagColors() {
    var cloud = document.querySelectorAll(".tagcloud");
    var tool = document.querySelector("span");
  } */

  return (
    <>
      <div className="uk-section section uk-padding" id="about">
        <div className="uk-container">
          <h3 className="heading">About Me</h3>
          <div
            className="uk-grid-match uk-child-width-1-2@m  uk-flex"
            data-uk-grid
          >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="uk-margin">
              <div className="tagCloud"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
