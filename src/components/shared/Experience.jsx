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
          title: "Full-Stack Web Developer",
          company: "Gnovus",
          period: "February 2021 - September 2025",
          description: [
            "Development of responsive web applications utilizing contemporary technologies (JavaScript, React, PHP, WordPress)",
            "Database implementation and interface design prioritized user experience"
          ]
        }
      ]
    },
    spanish: {
      title: "Experiencia",
      experiences: [
        {
          title: "Desarrollador Web Full-Stack",
          company: "Gnovus",
          period: "Febrero 2021 - Septiembre 2025",
          description: [
            "Desarrollo de aplicaciones web responsivas utilizando tecnologías contemporáneas (JavaScript, React, PHP, WordPress)",
            "Implementación de bases de datos y diseño de interfaces priorizando la experiencia del usuario"
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
