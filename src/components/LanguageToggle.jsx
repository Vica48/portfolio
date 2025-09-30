import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button 
        className={`toggle-btn ${language === 'spanish' ? 'active' : ''}`}
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        <span className="flag">🇪🇸</span>
        <span className="lang-text">ES</span>
      </button>
      <button 
        className={`toggle-btn ${language === 'english' ? 'active' : ''}`}
        onClick={toggleLanguage}
        aria-label="Toggle language"
      >
        <span className="flag">🇺🇸</span>
        <span className="lang-text">EN</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
