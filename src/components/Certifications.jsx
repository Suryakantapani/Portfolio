import React from 'react';
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation();

  const certifications = [
    {
      title: 'HACKERWAR 5.0',
      image: '/hackerwar.png.jpeg',
      link: 'https://drive.google.com/file/d/1LBq8bEXQsdX2pq-BivkqHcVAECVHyMn7/view?usp=share_link',
      organization: 'Codex Iter',
      date: 'Aug 2024-Sept 2024'
    },
    {
      title: 'Postman',
      image: '/postman.png',
      link: 'https://badgr.com/public/assertions/uBLNw9u4SmSG-7ZipM5RQg?identity__email=suryakantapani2004@gmail.com',
      organization: 'Postman',
      date: 'July 2024'
    },
    {
      title: 'Hackerrank',
      image: '/Hackerrank.jpeg',
      link: 'https://www.hackerrank.com/certificates/iframe/514be8d0487c',
      organization: 'Java Basics',
      date: 'Feb 2025'
    },
    {
      title: 'Hackentine',
      image: '/hack_2skill.jpeg',
      link: 'https://drive.google.com/file/d/1DdSOuRkh7UGDMHWtOf_lNVqt2GloJGtj/view?usp=share_link',
      organization: 'Web Development',
      date: 'Feb 2025'
    }
  ];

  return (
    <div id="certification" className="Hari_certi_jumbotron py-5">
      <div className="Hari_certi_container">
        <h2 className="Hari_certi_title">{t('certifications.title')}</h2>
        <p className="Hari_certi_subtitle">{t('certifications.subtitle')}</p>
        
        <div className="Hari_certi_grid">
          {certifications.map((cert, index) => (
            <div key={index} className="Hari_certi_card">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <img src={cert.image} alt={cert.title} className="Hari_certi_img" />
                <div className="Hari_certi_info">
                  <h5>{cert.title}</h5>
                  <p>{cert.organization}<br />{cert.date}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;