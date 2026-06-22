import { useEffect, useState } from "react";
import "./Navbar.scss";
import { HashLink as Link } from "react-router-hash-link";
import logoDark from "../../assets/icons/logo.png";
import logoLight from "../../assets/icons/logoLight.png";

const Navbar: React.FC = () => {
  const [navToggled, setNavToggled] = useState(false);
  const [logo, setLogo] = useState(logoDark);

  useEffect(() => {
    const syncLogoWithTheme = () => {
      if (localStorage.getItem("page.theme") === "light") {
        setLogo(logoLight);
      } else {
        setLogo(logoDark);
      }
    };

    syncLogoWithTheme();
    window.addEventListener("storage", syncLogoWithTheme);

    return () => {
      window.removeEventListener("storage", syncLogoWithTheme);
    };
  }, []);

  const showNav = () => {
    const primaryNav = document.querySelector<HTMLElement>(".primary-nav");
    const navToggle = document.querySelector<HTMLElement>(".toggle-mobile-nav");

    if (!primaryNav || !navToggle) {
      return;
    }

    const visibility = primaryNav.getAttribute("data-visible");

    if (!navToggled) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
    setNavToggled(!navToggled);

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }
  };

  return (
    <div
      data-uk-sticky="start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light"
      className="top-nav"
    >
      <nav className="uk-navbar-container uk-navbar-transparent uk-navbar nav-section">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav left-nav">
            <li>
              <Link className="uk-navbar-item logo" to="/#">
                <img src={logo} alt="logo" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="uk-navbar-right">
          <button
            aria-controls="primary-nav"
            aria-expanded="false"
            className="toggle-mobile-nav"
            onClick={showNav}
          >
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
