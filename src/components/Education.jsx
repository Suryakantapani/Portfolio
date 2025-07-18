import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();

  return (
    <div id="education" className="container section">
      <h2 className="section-title">{t('education.title')}</h2>

      <div className="edu-card">
        <div className="edu-content">
          <img src="/image.jpeg" alt="Bisweswar Project High School" className="edu-img" />
          <div className="edu-info">
            <a href="/cominsoon.html">
              <h2>{t('education.highSchool')}</h2>
            </a>
            <h4>{t('education.highSchoolPercent')}</h4>
            <p><i className="fas fa-calendar-alt"></i> April 2015 - March 2020</p>
          </div>
        </div>
      </div>

      <div className="edu-card">
        <div className="edu-content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfhkeMqQCkAvI30tzPmP4t1OduN2KFLTdgw&s" 
               alt="Saraswati Junior Science College" className="edu-img" />
          <div className="edu-info">
            <a href="https://school.careers360.com/schools/saraswati-junior-science-college-arunodoya-market-cuttack">
              <h2>{t('education.college')}</h2>
            </a>
            <h4>{t('education.collegePercent')}</h4>
            <p><i className="fas fa-calendar-alt"></i> September 2020 - July 2022</p>
          </div>
        </div>
      </div>

      <div className="edu-card">
        <div className="edu-content">
          <img src="https://images.squarespace-cdn.com/content/v1/57713a8e2994cae381dd86fe/75119539-209d-48e4-83e9-4134ada499d7/iter+gate.jpg" 
               alt="SIKSHA `O` ANUSANDHAN" className="edu-img" />
          <div className="edu-info">
            <a href="https://www.soa.ac.in/">
              <h2>{t('education.university')}</h2>
            </a>
            <h4>{t('education.universityCgpa')}</h4>
            <p><i className="fas fa-calendar-alt"></i> September 2023 - July 2027</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;