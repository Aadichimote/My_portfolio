import React, { useState } from "react";
import "./Portfolio.css";
import Projectimg1 from "../../assets/newsvilla.jpeg";
import Projectimg2 from "../../assets/booklab.jpeg";
import Projectimg3 from "../../assets/givequiz.png";

function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="services section" id="portfolio">
      <h2 className="skills__title__out left">Projects</h2>
      <h5 className="skills__title__out skills__title_h5 left">What I build..</h5>
      <div className="services__container container grid">
        <div className="services__content project__page ">
          <div>
            <i className="uil uil-newspaper services__icon"></i>
            <h3 className="services__title">NewsVila : The news app</h3>
          </div>
          <button className="services__button view_more" onClick={() => toggleTab(1)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </button>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-project">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">NewsVila : The news app</h3>
              <p className="services__modal-description">
                <img  className="project__img" src={Projectimg1} alt="NewsVila Project" />
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info"> Utilized React.js and Bootstrap to create a user-friendly interface</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info"> Integrated a NEWS API to present news and articles in JSON format.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info"> Utilized JavaScript to maintain a persistent connection for real-time news
updates.</p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content project__page">
          <div>
            <i className="uil uil-books services__icon"></i>
            <h3 className="services__title">BookStore: Book collection</h3>
          </div>
          <button className="services__button view_more" onClick={() => toggleTab(2)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </button>
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-project">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">BookStore: Book collection</h3>
              <img className="project__img" src={Projectimg2} alt="NewsVila Project" />
              <p className="services__modal-description"> 
</p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Developed a comprehensive library of books, providing users with a curated collection</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info"> Implemented a feature for users to download books in PDF format,
enhancing accessibility and convenience.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Designed a responsive layout that seamlessly adapts to all devices and includes
intuitive navigation for user-friendly browsing.</p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content  project__page">
          <div>
            <i className="uil uil-file-question-alt services__icon"></i>
            <h3 className="services__title">QuizGrad : Quiz app</h3>
          </div>
          <button className="services__button view_more" onClick={() => toggleTab(3)}>
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
          </button>
          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-project">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
              <h3 className="services__modal-title">QuizGrad : Quiz app</h3>
              <p className="services__modal-description">More than 3 years of experience in the field.</p>
              <img  className="project__img" src={Projectimg3} alt="NewsVila Project" />
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Utilized JavaScript logic to design the user interface, including seamless navigation
between pages within the application.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Incorporated 50 multiple-choice questions covering HTML, CSS, and JavaScript
topics.</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Added features such as a scoreboard and timer to enhance user engagement and
assessment experience.</p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
