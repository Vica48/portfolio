import React from 'react';
import './Interests.css';

const Interests = () => {
  return (
    <section className="interests">
      <div className="container">
        <h2 className="section-title">INTERESES</h2>
        <div className="interests-content">
          <ul className="interests-list">
            <li>Desarrollo de software y aplicaciones web</li>
            <li>Inteligencia artificial y nuevas tecnologías</li>
            <li>Ciberseguridad</li>
            <li>Aprendizaje y proyectos colaborativos</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Interests;
