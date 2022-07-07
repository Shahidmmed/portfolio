import "./Styles.scss";

const About: React.FC = () => {
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
  ];
  return (
    <>
      <div className="uk-section section" id="about">
        <div className="uk-container">
          <h3 className="heading">About</h3>

          <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
            </div>
            <div className="uk-margin uk-padding">
              <div className="uk-margin tagCloud"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
