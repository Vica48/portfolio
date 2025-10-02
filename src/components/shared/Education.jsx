import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/components.css';

const Education = () => {
  const { isSpanish } = useLanguage();

  const content = {
    english: {
      title: "Education",
      education: [
        {
          degree: "Computer Systems Engineering",
          institution: "CNCI University",
          period: "Currently Studying",
          description: "Currently pursuing a degree in Computer Systems Engineering, focusing on software development and system design."
        },
        {
          degree: "Preparatory",
          institution: "Conrado Menéndez Díaz Secondary School",
          period: "Completed",
          description: "Completed preparatory education."
        }
      ]
    },
    spanish: {
      title: "Educación",
      education: [
        {
          degree: "Ingeniería en Sistemas",
          institution: "Universidad CNCI",
          period: "Estudiando Actualmente",
          description: "Actualmente cursando una licenciatura en Ingeniería en Sistemas, enfocándome en desarrollo de software y diseño de sistemas."
        },
        {
          degree: "Preparatoria",
          institution: "Escuela Secundaria Conrado Menéndez Díaz",
          period: "Completada",
          description: "Completé la educación preparatoria."
        }
      ]
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">{currentContent.title}</h2>
        <div className="education-list">
          {currentContent.education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="degree-header">
                <h3 className="degree-title">{edu.degree}</h3>
                <div className="institution-info">
                  <span className="institution">{edu.institution}</span>
                  <span className="graduation-period">{edu.period}</span>
                </div>
              </div>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
