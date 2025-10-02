import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/components.css';

const Interests = () => {
  const { isSpanish } = useLanguage();

  const content = {
    english: {
      title: "Interests",
      interests: [
        {
          icon: "💻",
          title: "Technology",
          description: "Passionate about emerging technologies, AI, and the latest development trends."
        },
        {
          icon: "📚",
          title: "Learning",
          description: "Always eager to learn new technologies and improve my skills through continuous education."
        },
        {
          icon: "🎮",
          title: "Gaming",
          description: "Enjoy playing video games and exploring game development technologies."
        },
        {
          icon: "🏃‍♂️",
          title: "Fitness",
          description: "Regular exercise and outdoor activities to maintain a healthy lifestyle."
        },
        {
          icon: "📷",
          title: "Photography",
          description: "Love capturing moments and exploring the art of visual storytelling."
        },
        {
          icon: "✈️",
          title: "Travel",
          description: "Exploring new cultures, cuisines, and experiences around the world."
        }
      ]
    },
    spanish: {
      title: "Intereses",
      interests: [
        {
          icon: "💻",
          title: "Tecnología",
          description: "Apasionado por las tecnologías emergentes, IA y las últimas tendencias de desarrollo."
        },
        {
          icon: "📚",
          title: "Aprendizaje",
          description: "Siempre ansioso por aprender nuevas tecnologías y mejorar mis habilidades a través de la educación continua."
        },
        {
          icon: "🎮",
          title: "Gaming",
          description: "Disfruto jugando videojuegos y explorando tecnologías de desarrollo de juegos."
        },
        {
          icon: "🏃‍♂️",
          title: "Fitness",
          description: "Ejercicio regular y actividades al aire libre para mantener un estilo de vida saludable."
        },
        {
          icon: "📷",
          title: "Fotografía",
          description: "Me encanta capturar momentos y explorar el arte de la narración visual."
        },
        {
          icon: "✈️",
          title: "Viajes",
          description: "Explorando nuevas culturas, cocinas y experiencias alrededor del mundo."
        }
      ]
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  return (
    <section id="interests" className="interests">
      <div className="container">
        <h2 className="section-title">{currentContent.title}</h2>
        <div className="interests-grid">
          {currentContent.interests.map((interest, index) => (
            <div key={index} className="interest-item">
              <span className="interest-icon">{interest.icon}</span>
              <h3 className="interest-title">{interest.title}</h3>
              <p className="interest-description">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
