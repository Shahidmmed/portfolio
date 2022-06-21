import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <div
      data-uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light"
      className="top-nav uk-dark"
    >
      <nav className="uk-navbar-container uk-navbar-transparent uk-padding uk-navbar top-nav">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <a className="uk-navbar-item uk-logo" href="#">
              LOGO
            </a>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-animation-slide-top">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="uk-button">
              <a href="#">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
