import React from 'react';
import './Languages.css';

const Languages = () => {
  return (
    <section className="languages">
      <div className="container">
        <h2 className="section-title">IDIOMAS</h2>
        <div className="languages-content">
          <div className="language-item">
            <span className="language-name">Español</span>
            <span className="proficiency">Nativo</span>
          </div>
          <div className="language-item">
            <span className="language-name">Inglés</span>
            <span className="proficiency">Intermedio</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
