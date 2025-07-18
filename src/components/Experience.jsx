import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: 'Codex',
      image: '/codex.jpeg',
      link: 'https://codex-iter.in/',
      role: t('experience.codex'),
      period: 'Jan 2024 – Present'
    },
    {
      title: 'PW',
      image: '/pw.jpeg',
      link: 'https://ambassador.pw.live/',
      role: t('experience.pw'),
      period: 'Feb 2025 – Present'
    }
  ];

  return (
    <div id="experience">
      <div className="experience_container">
        <h2 className="experience_title">{t('experience.title')}</h2>
        <div className="experience_grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience_card">
              <a href={exp.link} target="_blank" rel="noopener noreferrer">
                <img src={exp.image} alt={exp.title} />
              </a>
              <div className="experience_info">
                <h5>{exp.title}</h5>
                <p>{exp.role}<br />{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;