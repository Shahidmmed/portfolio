import { ExternalLink, GitHub } from "react-feather";
import "./_styles.scss";
import financeLogger from "../../assets/projectImages/financeLogger.png";
import { IProjects } from "../../data/info";

interface Props {
  data?: IProjects;
}

const FeaturedProjects: React.FC<Props> = (prop) => {
  console.log(`../../assets/projectImages/${prop.data.img}`);
  return (
    <div className="projectItem">
      <div className="textContainer uk-padding">
        <h3 className="title">{prop.data.title}</h3>
        <div className="summary uk-card uk-card-small uk-card-body">
          <p>{prop.data.summary}</p>
        </div>
        <ul className="tools uk-flex">
          {prop.data.tools.map((tool, index) => (
            <li className="tool" key={index}>
              {tool}
            </li>
          ))}
        </ul>
        <div className="links uk-flex">
          {prop.data.github ? (
            <a
              href={prop.data.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="social-icon" />
            </a>
          ) : null}
          {prop.data.extlink ? (
            <a
              href={prop.data.extlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="social-icon" />
            </a>
          ) : null}
        </div>
      </div>
      <div className="imgContainer">
        <img
          src={require(`../../assets/projectImages/${prop.data.img}`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturedProjects;
