import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">HABILIDADES</h2>
        <div className="skills-content">
          <div className="skill-category">
            <h3>Lenguajes de programación</h3>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C++</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Frameworks y librerías</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Herramientas y otros</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">WordPress</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">APIs REST</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Metodologías</h3>
            <div className="skill-tags">
              <span className="skill-tag">Desarrollo ágil</span>
              <span className="skill-tag">Scrum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
