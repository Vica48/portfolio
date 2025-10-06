import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/components.css';
import profilepicture from '../../images/profilepicture.jpg';

const Header = () => {
  const { isSpanish } = useLanguage();

  const content = {
    english: {
      name: "Víctor Andrade",
      title: "Junior Frontend Developer",
      description: "Passionate about creating beautiful and interactive user interfaces. I love learning modern frontend technologies and building engaging web experiences that users will love.",
      downloadCV: "Download CV",
      contactMe: "Contact Me"
    },
    spanish: {
      name: "Víctor Andrade",
      title: "Desarrollador Frontend Junior",
      description: "Apasionado por crear interfaces de usuario hermosas e interactivas. Me encanta aprender tecnologías frontend modernas y construir experiencias web atractivas que los usuarios adorarán.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame"
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  return (
    <header className="header">
      <div className="container header-container">
      <img src={profilepicture} alt="Cat" />
        <div className="header-content">
          <h1 className="name">{currentContent.name}</h1>
          <h2 className="title">{currentContent.title}</h2>
          <p className="hero-description">{currentContent.description}</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button cta-primary">
              {currentContent.contactMe}
            </a>
            <a href="/Victor Andrade - CV.pdf" className="cta-button cta-secondary" download>
              📄 {currentContent.downloadCV}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
