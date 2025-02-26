import { useEffect } from "react";
import { myData } from "../../../data/info";
import aws from "../../../assets/aws1.png";
import "./Skills.scss";

const Skills: React.FC = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const bar = entry.target.querySelector(".progress");

      if (entry.isIntersecting) {
        bar.classList.add("animate");
        return;
      }
    });
  });

  useEffect(() => {
    document.querySelectorAll(".chart").forEach((footer) => {
      observer.observe(footer);
    });
  });

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
    width: "90%",
  };
  return (
    <>
      <div className="uk-section section uk-padding" id="skills">
        <div className="uk-container skills">
          <h3
            className="heading-left"
            data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 400;"
          >
            Skills & Experience <span className="heading-line"></span>
          </h3>

          <div className="uk-grid-match uk-child-width-1-2@m" data-uk-grid>
            <div data-uk-scrollspy="cls: uk-animation-slide-left; delay: 500;">
              <div>
                <p>
                  I'm an experienced full-stack developer that, out of personal
                  inclination, prefers to focus on front-end development.
                </p>
                <p>
                  User experience is a component of software that, in my
                  opinion, is essential for a successful product. I build
                  effective responsive websites that are fast, simple to use,
                  and constructed according to best engineering practices. I've
                  worked remotely for companies, provided startup consulting
                  services, and worked with creative individuals to develop web
                  applications for both commercial and consumer use.
                </p>
              </div>
              <div>
                <h5 className="skillHeader">Certifications</h5>
                <div className="certCard uk-card uk-card-default uk-card-body">
                  <div className="uk-flex uk-flex-center">
                    <img
                      src={aws}
                      alt="AWS Certified Cloud Practitioner"
                      className="certImg"
                    />
                  </div>
                  <p className="uk-flex uk-flex-center">
                    AWS Certified Cloud Practitioner validates cloud fluency and
                    foundational AWS knowledge.
                  </p>
                  <p className="uk-flex uk-flex-center">
                    <a
                      href="https://www.credly.com/badges/721cef9c-d188-4a3f-86a0-6498f6bef055"
                      className="verify"
                    >
                      Verify
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div data-uk-scrollspy="cls: uk-animation-fade; delay: 500;">
                  <div className="chart uk-margin">
                    <span>Front end</span>
                    <footer>
                      <div style={frontEnd} className="progress"></div>
                    </footer>
                  </div>
                  <div className="chart uk-margin">
                    <span>Back end</span>
                    <footer>
                      <div style={backEnd} className="progress"></div>
                    </footer>
                  </div>
                  <div className="chart uk-margin">
                    <span>React</span>
                    <footer>
                      <div style={react} className="progress"></div>
                    </footer>
                  </div>
                </div>
                <div className="uk-text-center resume">
                  <p className="uk-margin-remove">
                    To view my resume, click below
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resumeBtn uk-width-1-4"
                    href={myData.personalInfo.resume}
                  >
                    <span>
                      <span>
                        <span data-attr-span="View Resume">Resume</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="uk-margin-top">
                <h5 className="skillHeader uk-margin-top">Work Experience</h5>
                <div
                  className="skillCard uk-card uk-card-default uk-card-body"
                  data-uk-scrollspy="cls: uk-animation-fade; delay: 500;"
                >
                  <h5>Full Stack Developer</h5>
                  <p className="uk-margin-remove-bottom tag">ACS Ghana</p>
                  <p className="uk-margin-remove-top tag">2020-2023</p>
                  <p>
                    A dependable source of technical and project management
                    expertise, specializing in software engineering to help
                    corporate clients efficiently execute software development
                    and integration projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
