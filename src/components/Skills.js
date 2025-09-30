import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <p>JavaScript, PHP</p>
          </div>
          <div className="skill-category">
            <h3>Frameworks and Libraries</h3>
            <p>React, Node.js, Express</p>
          </div>
          <div className="skill-category">
            <h3>Tools and Additional Resources</h3>
            <p>Git, GitHub, WordPress, Docker, RESTful APIs</p>
          </div>
          <div className="skill-category">
            <h3>Methodologies</h3>
            <p>Agile Development, Scrum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
