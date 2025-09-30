import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">SOBRE MÍ</h2>
        <div className="about-content">
          <div className="personal-info">
            <div className="info-item">
              <span className="label">Fecha de Nacimiento:</span>
              <span className="value">04/08/1998</span>
            </div>
            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">vic.devand@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="label">Teléfono:</span>
              <span className="value">999-117-1768</span>
            </div>
            <div className="info-item">
              <span className="label">Dirección:</span>
              <span className="value">Calle 23D, #277 por 10b y 10d, Vergel II. Mérida, Yucatán.</span>
            </div>
          </div>
          <div className="description">
            <p>
              Estudiante de Ingeniería en Sistemas y Desarrollador Web Fullstack, con experiencia 
              en el desarrollo y mantenimiento de aplicaciones web. Apasionado por la tecnología, 
              el aprendizaje continuo y la resolución de problemas. Me destaco por mis habilidades 
              en trabajo en equipo y adaptación a nuevos entornos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
