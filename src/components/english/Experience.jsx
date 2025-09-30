import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <div className="container">
        <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
        <div className="experience-item">
          <div className="job-header">
            <h3 className="job-title">Full-Stack Web Developer</h3>
            <div className="company-info">
              <span className="company">Gnovus</span>
              <span className="period">February 2021 - September 2025</span>
            </div>
          </div>
          <ul className="job-description">
            <li>Development of responsive web applications utilizing contemporary technologies (JavaScript, React, PHP, WordPress)</li>
            <li>Database implementation and interface design prioritized user experience.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
