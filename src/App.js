import React from 'react';
import './App.css';
import { LanguageProvider } from './context/LanguageContext';
import LanguageToggle from './components/LanguageToggle.jsx';

// Shared Components
import Header from './components/shared/Header.jsx';
import About from './components/shared/About.jsx';
import Experience from './components/shared/Experience.jsx';
import Education from './components/shared/Education.jsx';
import Skills from './components/shared/Skills.jsx';
import Languages from './components/shared/Languages.jsx';
import Interests from './components/shared/Interests.jsx';
import Contact from './components/shared/Contact.jsx';

const AppContent = () => {
  return (
    <div className="App">
      <LanguageToggle />
      <Header />
      <main className="main-content">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Interests />
        <Contact />
      </main>
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
