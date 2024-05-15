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
                <a href="#home" className="nav__link active-link">
                  <i className="uil uil-estate nav__icon"></i><p className="nav_item_text">Home</p>
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon"></i><p className="nav_item_text">About</p>
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon"></i><p className="nav_item_text">Skills</p> 
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon"></i><p className="nav_item_text">Services</p> 
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="uil uil-scenery nav__icon"></i><p className="nav_item_text">Portfolio</p>
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon"></i><p className="nav_item_text">Contact</p>
                </a>
              </li>
            </ul>
           
          </div>
          <i className="uil uil-icons nav_close down_nav_btn" onClick={()=>{
              setMenuOpen(!menuOpen)}}></i> 
          <div className="nav_toggle">
           
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
