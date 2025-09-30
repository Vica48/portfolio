import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('spanish'); // Default to Spanish

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'spanish' ? 'english' : 'spanish');
  };

  const value = {
    language,
    toggleLanguage,
    isSpanish: language === 'spanish',
    isEnglish: language === 'english'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
