import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Hive Mind',
      image: '/hive.jpeg',
      link: 'https://github.com/Suryakantapani/HiveMind',
      description: t('projects.hiveMind'),
      date: 'Feb 2024'
    },
    {
      title: 'Insta-Mark',
      image: '/hive.jpeg',
      link: 'https://github.com/Suryakantapani/InstaMark-Smart_Attendance-',
      description: t('projects.instaMark'),
      date: 'Nov 2024'
    },
    {
      title: 'NexaHealth Ai',
      image: '/todo.png',
      link: 'https://suryakantapani.github.io/Todo-List/',
      description: t('projects.nexaHealth'),
      date: 'March 2024'
    },
    {
      title: 'Krusi Sathi',
      image: '/farmer.jpg',
      link: 'https://github.com/ITER-SIH/HW5-Team55',
      description: t('projects.krusiSathi'),
      date: 'Aug 2024'
    }
  ];

  return (
    <div id="projects" className="project_new_jumbotron">
      <div className="project_new_container">
        <h2 className="project_new_title">{t('projects.title')}</h2>
         
        <div className="project_new_grid">
          {projects.map((project, index) => (
            <div key={index} className="project_new_card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project_new_img" />
                <div className="project_new_overlay">
                  <div className="project_new_text">
                    {project.description}<br />Issued: {project.date}
                  </div>
                </div>
                <div className="project_new_info">
                  <h5>{project.title}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;