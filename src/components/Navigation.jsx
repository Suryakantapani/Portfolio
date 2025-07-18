import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="nav-container">
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>{t('nav.about')}</a></li>
        <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>{t('nav.education')}</a></li>
        <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>{t('nav.skills')}</a></li>
        <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>{t('nav.projects')}</a></li>
        <li><a href="#certification" onClick={(e) => { e.preventDefault(); scrollToSection('certification'); }}>{t('nav.certifications')}</a></li>
        <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>{t('nav.experience')}</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>{t('nav.contact')}</a></li>
        <li><LanguageSwitcher /></li>
      </ul>
    </nav>
  );
};

export default Navigation;