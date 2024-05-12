import React, { useState } from "react";

import "./header.css";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="header">
        <nav className="nav_container">
          <a  className="nav__logo">
            Adi...
          </a>
          <div className={menuOpen ? "nav__menu" : "nav__close"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#Home" className="nav__link active-link">
                  <i class="uil uil-estate nav__icon"></i>Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i>About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i>Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i>Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i>Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i>Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-icons nav_close"></i> 
          </div>
          <i className="uil uil-icons nav_close" onClick={()=>{
              setMenuOpen(!menuOpen)}}></i> 
          <div className="nav_toggle">
            <i className="uil uil-apps nav_close"></i> 
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
