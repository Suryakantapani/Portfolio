import React from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  const skillIcons = [
    { icon: 'fab fa-java text-danger', link: 'https://www.java.com/en/' },
    { icon: 'fab fa-js text-warning', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { icon: 'fab fa-python text-info', link: 'https://docs.python.org/3/' },
    { icon: 'fab fa-html5 text-danger', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { icon: 'fab fa-css3-alt text-primary', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { icon: 'fab fa-node-js text-success', link: 'https://nodejs.org/en/docs' },
    { icon: 'fas fa-code text-secondary', link: 'https://www.w3schools.com/whatis/whatis_fullstack.asp' },
    { icon: 'fas fa-database text-warning', link: 'https://www.mysql.com/' },
    { icon: 'fab fa-bootstrap text-purple', link: 'https://getbootstrap.com/' },
    { icon: 'fab fa-cuttlefish text-decoration', link: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
    { icon: 'fas fa-chart-bar text-info', link: 'https://www.investopedia.com/terms/d/data-visualization.asp' },
    { icon: 'fas fa-leaf text-success', link: 'https://spring.io/' },
    { icon: 'fab fa-ethereum text-light', link: 'https://ethereum.org/en/developers/docs/smart-contracts/' },
    { icon: 'fa-brands fa-git-alt text-danger', link: 'https://git-scm.com/doc' },
    { icon: 'fa-brands fa-bitcoin text-warning', link: 'https://bitcoin.org/en/how-it-works' },
    { icon: 'fa-brands fa-aws', link: 'https://aws.amazon.com/documentation/' },
    { icon: 'fa-brands fa-docker', link: 'https://docs.docker.com/' }
  ];

  return (
    <div id="skills" className="section">
      <div className="container text-center">
        <h1>{t('skills.title')}</h1>

        <div className="jumbotron jumbotron-fluid jumbotron-custom">
          <h2 className="skills-header">{t('skills.subtitle')}</h2>
          
          <div className="skills-grid">
            {skillIcons.map((skill, index) => (
              <div key={index} className="icon-box">
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <i className={skill.icon}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;