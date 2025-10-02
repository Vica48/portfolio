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
      description: "I am a passionate full-stack developer with over 3 years of experience in creating innovative digital solutions. My expertise spans across modern web technologies, mobile development, and cloud computing. I love turning complex problems into simple, beautiful, and intuitive solutions."
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
      description: "Soy un desarrollador full-stack apasionado con más de 3 años de experiencia creando soluciones digitales innovadoras. Mi experiencia abarca tecnologías web modernas, desarrollo móvil y computación en la nube. Me encanta convertir problemas complejos en soluciones simples, hermosas e intuitivas."
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
