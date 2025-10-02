import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/components.css';

const Header = () => {
  const { isSpanish } = useLanguage();

  const content = {
    english: {
      name: "Víctor Andrade",
      title: "Full Stack Developer",
      description: "Passionate about creating innovative digital solutions with modern technologies. I specialize in developing scalable web applications and mobile solutions that deliver exceptional user experiences.",
      downloadCV: "Download CV",
      contactMe: "Contact Me"
    },
    spanish: {
      name: "Víctor Andrade",
      title: "Desarrollador Full Stack",
      description: "Apasionado por crear soluciones digitales innovadoras con tecnologías modernas. Me especializo en desarrollar aplicaciones web escalables y soluciones móviles que ofrecen experiencias de usuario excepcionales.",
      downloadCV: "Descargar CV",
      contactMe: "Contáctame"
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  return (
    <header className="header">
      <div className="container">
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
