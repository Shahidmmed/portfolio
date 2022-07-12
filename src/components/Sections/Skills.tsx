import { Link } from "react-router-dom";
import "./Styles.scss";

const Skills: React.FC = () => {
  const frontEnd = {
    backgroundColor: "var(--accentColor)",
    width: "90%",
  };
  const backEnd = {
    backgroundColor: "rgb(255, 34, 83)",
    width: "80%",
  };
  const react = {
    backgroundColor: "rgb(210, 108, 213)",
    width: "75%",
  };
  return (
    <>
      <div className="uk-section section uk-padding" id="skills">
        <div className="uk-container skills">
          <h3 className="heading">Skills & Experience</h3>

          <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid>
            <div>
              <p></p>
              <p>
                I'm an experienced full-stack developer that, out of personal
                inclination, prefers to focus on front-end development. I build
                successful responsive websites that are fast, simple to use, and
                constructed according to best engineering practices. I've worked
                remotely for companies, provided startup consulting services,
                and worked with creative individuals to develop web applications
                for both commercial and consumer use.
              </p>
              <div className="uk-text-center resume">
                <p className="uk-margin-remove">
                  For more information and details, click below
                </p>
                <Link className="resumeBtn uk-width-1-4" to="">
                  <span>
                    <span>
                      <span data-attr-span="View Resume">Resume</span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <div className="chart uk-margin">
                  <span>Front end</span>
                  <footer>
                    <div style={frontEnd}></div>
                  </footer>
                </div>
                <div className="chart uk-margin">
                  <span>Back end</span>
                  <footer>
                    <div style={backEnd}></div>
                  </footer>
                </div>
                <div className="chart uk-margin">
                  <span>React</span>
                  <footer>
                    <div style={react}></div>
                  </footer>
                </div>
              </div>
              <div className="skillCard uk-card uk-card-default uk-card-body">
                <h5>Full Stack Developer</h5>
                <p className="uk-margin-remove-bottom tag">ACS Ghana</p>
                <p className="uk-margin-remove-top tag">2020-2022</p>
                <p>
                  Tech company that provides software development services to
                  corporate, ranging from outsourcing to customizations to
                  integrations and packaged software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
