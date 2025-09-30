import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="about-content">
          <div className="personal-info">
            <div className="info-item">
              <span className="label">Date of Birth:</span>
              <span className="value">04/08/1998</span>
            </div>
            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">vic.devand@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="label">Phone:</span>
              <span className="value">999-117-1768</span>
            </div>
            <div className="info-item">
              <span className="label">Address:</span>
              <span className="value">Calle 23D, #277 por 10b y 10d, Vergel II. Mérida, Yucatán.</span>
            </div>
          </div>
          <div className="description">
            <p>
              Systems Engineering student and Full Stack Web Developer with experience 
              in developing and maintaining web applications. I am passionate about 
              technology, continuous learning, and problem-solving, excelling in 
              teamwork and adapting to new environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
