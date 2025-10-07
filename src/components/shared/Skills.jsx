import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import '../../styles/components.css';

const Skills = () => {
  const { isSpanish } = useLanguage();

  const content = {
    english: {
      title: "Skills",
      categories: [
        {
          title: "Core Technologies",
          skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
        },
        {
          title: "Frameworks & Libraries",
          skills: ["React", "Bootstrap", "Tailwind CSS", "Sass"]
        },
        {
          title: "Tools & Development",
          skills: ["Git", "VS Code", "Figma", "Webpack", "Vite", "Chrome DevTools"]
        },
        {
          title: "Learning & Growing",
          skills: ["Next.js", "Redux", "Node.js", "Responsive Design", "UI/UX Principles"]
        }
      ]
    },
    spanish: {
      title: "Habilidades",
      categories: [
        {
          title: "Tecnologías Principales",
          skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"]
        },
        {
          title: "Frameworks y Librerías",
          skills: ["React"  , "Bootstrap", "Tailwind CSS", "Sass"]
        },
        {
          title: "Herramientas y Desarrollo",
          skills: ["Git", "VS Code", "Figma", "Webpack", "Vite", "Chrome DevTools"]
        },
        {
          title: "Aprendiendo y Creciendo",
          skills: ["Next.js", "Redux", "Node.js", "Diseño Responsivo", "Principios UI/UX"]
        }
      ]
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{currentContent.title}</h2>
        <div className="skills-grid">
          {currentContent.categories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
