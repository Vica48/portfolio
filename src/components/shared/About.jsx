import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/components.css';

const About = () => {
  const { isSpanish } = useLanguage();

  const content = {
    english: {
      title: "About Me",
      personalInfo: {
        age: "Age",
        ageValue: "27 years",
        location: "Location",
        locationValue: "Mérida, Yucatán, Mexico",
        email: "Email",
        emailValue: "vic.devand@gmail.com",
        phone: "Phone",
        phoneValue: "+52 999 117 1768"
      },
      description: "I am a passionate junior frontend developer with a strong foundation in modern web technologies. I specialize in creating beautiful, responsive user interfaces and am constantly learning new frontend frameworks and tools. I love bringing designs to life and creating engaging user experiences."
    },
    spanish: {
      title: "Acerca de Mí",
      personalInfo: {
        age: "Edad",
        ageValue: "27 años",
        location: "Ubicación",
        locationValue: "Mérida, Yucatán, México",
        email: "Correo",
        emailValue: "vic.devand@gmail.com",
        phone: "Teléfono",
        phoneValue: "+52 999 117 1768"
      },
      description: "Soy un desarrollador frontend junior apasionado con una base sólida en tecnologías web modernas. Me especializo en crear interfaces de usuario hermosas y responsivas, y estoy constantemente aprendiendo nuevos frameworks y herramientas frontend. Me encanta dar vida a los diseños y crear experiencias de usuario atractivas."
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="personal-info">
            <div className="info-item">
              <span className="label">{currentContent.personalInfo.age}</span>
              <span className="value">{currentContent.personalInfo.ageValue}</span>
            </div>
            <div className="info-item">
              <span className="label">{currentContent.personalInfo.location}</span>
              <span className="value">{currentContent.personalInfo.locationValue}</span>
            </div>
            <div className="info-item">
              <span className="label">{currentContent.personalInfo.email}</span>
              <span className="value">{currentContent.personalInfo.emailValue}</span>
            </div>
            <div className="info-item">
              <span className="label">{currentContent.personalInfo.phone}</span>
              <span className="value">{currentContent.personalInfo.phoneValue}</span>
            </div>
          </div>
          <div className="description">
            <p>{currentContent.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
