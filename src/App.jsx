import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      
      <footer style={{ 
        background: 'rgba(15, 23, 42, 0.9)', 
        padding: '20px', 
        textAlign: 'center', 
        color: '#94a3b8', 
        borderTop: '1px solid rgba(56, 189, 248, 0.1)' 
      }}>
        <p>&copy; 2025 Suryakanta Pani. {t('footer')}</p>
      </footer>
    </div>
  );
}

export default App;