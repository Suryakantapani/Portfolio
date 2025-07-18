import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = t('hero.roles', { returnObjects: true });

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentText = roles[roleIndex] || '';

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCurrentRole(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const copyEmail = () => {
    const email = "suryakantapani2004@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      // Create notification
      const notification = document.createElement('div');
      notification.innerHTML = '✅ Email copied to clipboard!';
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981, #059669);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        animation: slideIn 0.3s ease;
      `;
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
    });
  };

  return (
    <div id="about" className="section text-center about_name">
      <div className="x">
        <img src="/profolio.jpeg" alt="Suryakanta Photo" className="profile-img animate__animated animate__zoomIn animate__delay-1s" />
        <h1 className="name animate__animated animate__fadeInDown animate__delay-2s">
          {t('hero.greeting')} <span className="z">{t('hero.name')}</span>
        </h1>
        <h2 id="typing" className="animate__animated animate__fadeInUp animate__delay-3s">
          I'm {currentRole}
        </h2>
        
        <div className="hari_03 animate__animated animate__fadeIn animate__delay-4s">
          <h1>{t('about.title')}</h1>
          <ul>
            <li><span className="icon">🧠</span> <strong>Problem Solver:</strong> {t('about.problemSolver')}</li>
            <li><span className="icon">💻</span> <strong>Backend Developer:</strong> {t('about.backendDev')}</li>
            <li><span className="icon">⛓️</span> <strong>Blockchain Developer:</strong> {t('about.blockchainDev')}</li>
            <li><span className="icon">📊</span> <strong>DSA Enthusiast:</strong> {t('about.dsaEnthusiast')}</li>
          </ul>

          <div className="cta">
            {t('about.cta')}
            <br />
            <button className="copy-btn" onClick={copyEmail}>{t('about.copyEmail')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;