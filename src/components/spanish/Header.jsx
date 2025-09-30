import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="name">Victor Andrade</h1>
          <h2 className="title">Desarrollador Web Full Stack</h2>
          <p className="hero-description">
            Estudiante de Ingeniería en Sistemas y Desarrollador Web Fullstack, con experiencia 
            en el desarrollo y mantenimiento de aplicaciones web. Apasionado por la tecnología, 
            el aprendizaje continuo y la resolución de problemas.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button cta-primary">
              <span>Contactar</span>
              <span>→</span>
            </a>
            <a href="#experience" className="cta-button cta-secondary">
              <span>Ver Proyectos</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
