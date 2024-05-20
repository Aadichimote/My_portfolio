import React from "react";
import "./qualification.css";
function Qualification() {
  return (
    <section className="qualification section">
        <div className="qualification__heading">
      <h2 className="skills__title__out">Qualification</h2>
      <h6 className="skills__title__out skills__title__h3">
        My personal Journey
      </h6></div>
      <div className="qualification__container container">
        <div className="qualification__table">
          <div className="qualificaiton__button qualification__active button--flex">
            <i className="uil-graduation-cap qualifiaction__icon"></i>
            {""}Education
          </div>
        </div>
        <div className="qualification__section">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"><i class="uil uil-location-arrow"></i>B.SC: Bachlor of sciance</h3>
                <span className="qualification__subtitle">
                Sant Gadge Baba Amaravati Unviersity
                </span>
                <div className="qualification__calen">
                  <i className="uil uil-calender-alt"></i>2019- 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder">CGPA: 8.4/10.0</span>

                <p className="qualification__line">completed</p>
              </div>
            </div>
            <div className="qualification__data">
              <div>
              <h3 className="qualification__title"><i class="uil uil-location-arrow"></i>MCA: Masster Of Computer Application</h3>
                <span className="qualification__subtitle">
                Babasahed Ambedkar Marathwada University
                </span>
                <div className="qualification__calen">
                  <i className="uil uil-calender-alt"></i>2022-2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder">CGPA:7.8 /10.0</span>

                <p className="qualification__line">completed</p>
              </div>
            </div>


            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
