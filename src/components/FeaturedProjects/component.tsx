import { GitHub } from "react-feather";
import "./_styles.scss";
import financeLogger from "../../assets/projectImages/financeLogger.png";

const FeaturedProjects: React.FC = () => {
  return (
    <div className="projectItem">
      <div className="textContainer">
        <h3 className="title">Finance Logger</h3>
        <div className="summary uk-card uk-card-small uk-card-body">
          <p>
            app for logging and calculating expenses over a selected period of
            time
          </p>
        </div>
        <ul className="tools uk-flex">
          <li className="tool">PostgreSQL</li>
          <li className="tool">HTML</li>
          <li className="tool">CSS</li>
        </ul>
        <div className="links">
          <GitHub />
        </div>
      </div>
      <div className="imgContainer">
        <img src={financeLogger} alt="" />
      </div>
    </div>
  );
};

export default FeaturedProjects;
