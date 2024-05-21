import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Aditya</h1>
        <ul className="footer__list">
          <li>
            <a href=" #about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.instagram.com/aditya__chimote/" className="home__social-icon" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://github.com/Aadichimote" className="home__social-icon" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/aditya-chimote-37a608280/" className='home__social-icon' target=''><i class="uil uil-linkedin"></i></a>
        </div>
        <span className='footer__copy'>&#169;All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
