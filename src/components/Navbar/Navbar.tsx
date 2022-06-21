import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { HashLink as Link } from "react-router-hash-link";
import menu from "../../assets/icons/menu.svg";

const Navbar: React.FC = () => {
  useEffect(() => {}, []);
  return (
    <div
      data-uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light"
      className="top-nav uk-dark"
    >
      <nav className="uk-navbar-container uk-navbar-transparent uk-padding-small uk-navbar nav-section">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav left-nav">
            <Link className="uk-navbar-item uk-logo" to="/#home">
              Logo
            </Link>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <button aria-controls="primary-nav" className="toggle-mobile-nav">
            <span className="sr-only"></span>
          </button>
          <ul className="uk-navbar-nav uk-animation-slide-top primary-nav">
            <li>
              <Link className="uk-navbar-item" to="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="uk-navbar-item" to="/#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="uk-navbar-item" to="/#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="uk-navbar-item" to="/#contact">
                Contact
              </Link>
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
