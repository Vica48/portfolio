import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">SCHOLARLY INFORMATION</h2>
        <div className="education-items">
          <div className="education-item">
            <h3 className="degree">Computer Systems Engineering</h3>
            <p className="institution">CNCI University</p>
          </div>
          <div className="education-item">
            <h3 className="degree">Preparatory</h3>
            <p className="institution">Conrado Menéndez Díaz Secondary School</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
