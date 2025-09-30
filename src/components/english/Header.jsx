import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="name">Victor Andrade</h1>
          <h2 className="title">Full Stack Web Developer</h2>
          <p className="hero-description">
            Systems Engineering student and Full Stack Web Developer with experience 
            in developing and maintaining web applications. I am passionate about 
            technology, continuous learning, and problem-solving.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button cta-primary">
              <span>Get In Touch</span>
              <span>→</span>
            </a>
            <a href="#experience" className="cta-button cta-secondary">
              <span>View Projects</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
