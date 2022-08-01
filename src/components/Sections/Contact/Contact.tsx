import "./Contact.scss";
import { GitHub, Twitter, AtSign, Linkedin } from "react-feather";
import { myData } from "../../../data/info";

const Contact: React.FC = () => {
  return (
    <>
      <div
        className="uk-section section uk-padding contactSection"
        id="contact"
      >
        <div
          className="uk-container"
          data-uk-scrollspy="cls: uk-animation-fade; delay: 600;"
        >
          <p className="accentText uk-margin-remove uk-text-center">
            Want to work with me?
          </p>
          <h3 className="heading uk-margin-small uk-text-center">
            Get In Touch
          </h3>
          <div className="uk-padding contact">
            <p className="uk-text-center">
              I'm open collaborate on projects and very interested in attractive
              freelance and long term employment opportunites. We can simply
              have a chat if you wish to discuss anything though.
            </p>
            <a className="hello" href={`mailto:${myData.personalInfo.mail}`}>
              Say Hello
            </a>
          </div>
        </div>
        <footer>
          <ul className="socials" data-visible="false">
            <li className="">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={myData.personalInfo.github}
              >
                <GitHub size={28} className="social-icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={myData.personalInfo.linkedIn}
              >
                <Linkedin size={28} className="social-icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={myData.personalInfo.twitter}
              >
                <Twitter size={28} className="social-icon" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${myData.personalInfo.mail}`}
              >
                <AtSign size={28} className="social-icon" />
              </a>
            </li>
          </ul>
          <p className="uk-text-center">
            Designed & built by Abdul-Shahid Mohammed
          </p>
        </footer>
      </div>
    </>
  );
};

export default Contact;
