import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/components.css';

const Languages = () => {
  const { isSpanish } = useLanguage();

  const content = {
    english: {
      title: "Languages",
      languages: [
        {
          name: "Spanish",
          level: "Native",
          description: "Mother tongue with perfect command of grammar and vocabulary."
        },
        {
          name: "English",
          level: "Beginner",
          description: "Basic to intermediate level in both written and spoken English. Working on improving my proficiency."
        }
      ]
    },
    spanish: {
      title: "Idiomas",
      languages: [
        {
          name: "Español",
          level: "Nativo",
          description: "Lengua materna con dominio perfecto de gramática y vocabulario."
        },
        {
          name: "Inglés",
          level: "Principiante Intermedio",
          description: "Nivel básico a intermedio tanto en inglés escrito como hablado. Trabajando en mejorar mi competencia."
        }
      ]
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  return (
    <section id="languages" className="languages">
      <div className="container">
        <h2 className="section-title">{currentContent.title}</h2>
        <div className="languages-grid">
          {currentContent.languages.map((language, index) => (
            <div key={index} className="language-item">
              <h3 className="language-name">{language.name}</h3>
              <p className="language-level">{language.level}</p>
              <p className="language-description">{language.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
