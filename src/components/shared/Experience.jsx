import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/components.css';

const Experience = () => {
  const { isSpanish } = useLanguage();

  const content = {
    english: {
      title: "Experience",
      experiences: [
        {
          title: "Frontend Web Developer",
          company: "Gnovus",
          period: "February 2021 - September 2025",
          description: [
            "Development of responsive and interactive user interfaces using modern frontend technologies (React, JavaScript, HTML5, CSS3)",
            "Focus on creating engaging user experiences and implementing responsive designs that work across all devices"
          ]
        }
      ]
    },
    spanish: {
      title: "Experiencia",
      experiences: [
        {
          title: "Desarrollador Web Frontend",
          company: "Gnovus",
          period: "Febrero 2021 - Septiembre 2025",
          description: [
            "Desarrollo de interfaces de usuario responsivas e interactivas utilizando tecnologías frontend modernas (React, JavaScript, HTML5, CSS3)",
            "Enfoque en crear experiencias de usuario atractivas e implementar diseños responsivos que funcionen en todos los dispositivos"
          ]
        }
      ]
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{currentContent.title}</h2>
        <div className="experience-list">
          {currentContent.experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="job-header">
                <h3 className="job-title">{exp.title}</h3>
                <div className="company-info">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              <ul className="job-description">
                {exp.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
