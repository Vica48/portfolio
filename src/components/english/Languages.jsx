import React from 'react';
import './Languages.css';

const Languages = () => {
  return (
    <section className="languages">
      <div className="container">
        <h2 className="section-title">LANGUAGES</h2>
        <div className="languages-content">
          <div className="language-item">
            <span className="language-name">Spanish</span>
            <span className="proficiency">Native</span>
          </div>
          <div className="language-item">
            <span className="language-name">English</span>
            <span className="proficiency">Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
