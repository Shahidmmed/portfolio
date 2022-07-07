import { useEffect, useState } from "react";
import "./Navbar.scss";
import { HashLink as Link } from "react-router-hash-link";

const Navbar: React.FC = () => {
  const [toggled, setToggled] = useState(false);
  useEffect(() => {}, []);

  const showNav = () => {
    const primaryNav = document.querySelector(".primary-nav");
    const navToggle = document.querySelector(".toggle-mobile-nav");
    const visibility = primaryNav.getAttribute("data-visible");

    if (!toggled) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
    setToggled(!toggled);

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }

    primaryNav.addEventListener("focusout", () => {
      console.log("clic");
    });
  };

  return (
    <div
      data-uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light"
      className="top-nav"
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
          <button
            aria-controls="primary-nav"
            aria-expanded="false"
            className="toggle-mobile-nav"
            onClick={showNav}
          >
            {/*  {!toggled ? (
          <Menu width={40} height={40} color="var(--accentColor)"></Menu>
        ) : (
          <X width={40} height={40} color="var(--accentColor)"></X>
        )} */}
            <span className="sr-only"></span>
          </button>
          <ul className="uk-navbar-nav primary-nav" data-visible="false">
            <li>
              <Link className="uk-navbar-item menu-btn" to="/#about">
                About
              </Link>
            </li>
            <li>
              <Link className="uk-navbar-item menu-btn" to="/#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className="uk-navbar-item menu-btn" to="/#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="uk-navbar-item menu-btn" to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
