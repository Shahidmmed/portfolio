import { ExternalLink, GitHub } from "react-feather";
import "./_styles.scss";
import { IProjects } from "../../data/info";

interface Props {
  data?: IProjects;
}
const OtherProjects: React.FC<Props> = (prop) => {
  return (
    <div>
      <div className="folder uk-card uk-card-default uk-card-body">
        <div className="links">
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
              <ExternalLink className="social-icon " />
            </a>
          ) : null}
        </div>
        <div>
          <h3 className="title">{prop.data.title}</h3>
          <div className="summary uk-card uk-card-small uk-card-body uk-padding-remove">
            <p>{prop.data.summary}</p>
          </div>
          <ul className="tools uk-flex">
            {prop.data.tools.map((tool, index) => (
              <li className="tool" key={index}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
