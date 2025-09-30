import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="section-title">EXPERIENCIA LABORAL</h2>
        <div className="experience-item">
          <div className="job-header">
            <h3 className="job-title">Desarrollador Web Fullstack</h3>
            <div className="company-info">
              <span className="company">Gnovus</span>
              <span className="period">Febrero 2021 - Septiembre 2025</span>
            </div>
          </div>
          <ul className="job-description">
            <li>Desarrollo de aplicaciones web responsivas con tecnologías modernas (JavaScript, React, PHP, WordPress)</li>
            <li>Implementación de bases de datos y diseño de interfaces centradas en la experiencia de usuario.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
