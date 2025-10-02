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
          title: "Frontend",
          skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Tailwind CSS"]
        },
        {
          title: "Backend",
          skills: ["Node.js", "Express", "PHP"]
        },
        {
          title: "Mobile",
          skills: ["React Native"]
        },
        {
          title: "Tools & Others",
          skills: ["Git", "VS Code", "Figma", "Postman", "Webpack", "Vite"]
        }
      ]
    },
    spanish: {
      title: "Habilidades",
      categories: [
        {
          title: "Frontend",
          skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Sass", "Tailwind CSS"]
        },
        {
          title: "Backend",
          skills: ["Node.js", "Express", "PHP"]
        },
        {
          title: "Móvil",
          skills: ["React Native"]
        },
        {
          title: "Herramientas y Otros",
          skills: ["Git", "VS Code", "Figma", "Postman", "Webpack", "Vite"]
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
