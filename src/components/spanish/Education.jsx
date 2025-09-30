import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">DATOS ACADÉMICOS</h2>
        <div className="education-items">
          <div className="education-item">
            <h3 className="degree">Ingeniería en Sistemas Computacionales</h3>
            <p className="institution">Universidad CNCI</p>
          </div>
          <div className="education-item">
            <h3 className="degree">Preparatoria</h3>
            <p className="institution">Escuela Preparatoria Conrado Menéndez Díaz</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
