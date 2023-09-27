import React, { useState } from "react";
import { routes } from "../../system/routes";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState(!navState);
  };

  return (
    <header>
      <div className="menu-btn" onClick={() => toggleNav()}>
        <div className={`menu-btn__burger ${navState ? "open" : ""}`}></div>
      </div>
      <div className="menu-left">
        <img className="menu-left__logo" src={logo} />
      </div>
      <nav className={`nav ${navState ? "open" : ""}`}>
        <ul className={`menu-nav ${navState ? "open" : ""}`}>
          {routes.map((route, index) => (
            <li
              key={index}
              className={`menu-nav__item active ${navState ? "open" : ""}`}
            >
              <a className="menu-nav__link" href={route.path}>
                {route.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
