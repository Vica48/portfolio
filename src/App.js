import React from 'react';
import './App.css';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle.jsx';

// Spanish Components
import SpanishHeader from './components/spanish/Header.jsx';
import SpanishAbout from './components/spanish/About.jsx';
import SpanishExperience from './components/spanish/Experience.jsx';
import SpanishEducation from './components/spanish/Education.jsx';
import SpanishSkills from './components/spanish/Skills.jsx';
import SpanishLanguages from './components/spanish/Languages.jsx';
import SpanishInterests from './components/spanish/Interests.jsx';
import SpanishContact from './components/spanish/Contact.jsx';

// English Components
import EnglishHeader from './components/english/Header.jsx';
import EnglishAbout from './components/english/About.jsx';
import EnglishExperience from './components/english/Experience.jsx';
import EnglishEducation from './components/english/Education.jsx';
import EnglishSkills from './components/english/Skills.jsx';
import EnglishLanguages from './components/english/Languages.jsx';
import EnglishInterests from './components/english/Interests.jsx';
import EnglishContact from './components/english/Contact.jsx';

const AppContent = () => {
  const { isSpanish } = useLanguage();

  return (
    <div className="App">
      <LanguageToggle />
      {isSpanish ? (
        <>
          <SpanishHeader />
          <main className="main-content">
            <SpanishAbout />
            <SpanishExperience />
            <SpanishEducation />
            <SpanishSkills />
            <SpanishLanguages />
            <SpanishInterests />
            <SpanishContact />
          </main>
        </>
      ) : (
        <>
          <EnglishHeader />
          <main className="main-content">
            <EnglishAbout />
            <EnglishExperience />
            <EnglishEducation />
            <EnglishSkills />
            <EnglishLanguages />
            <EnglishInterests />
            <EnglishContact />
          </main>
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
