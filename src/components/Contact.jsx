import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div id="contact" className="section text-white py-5">
      <div className="container">
        <div className="jumbotron con bg-info p-4 rounded">
          <h2 className="contact-header text-center text-light">{t('contact.title')}</h2>
          <p className="text-center mb-4" style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
            {t('contact.subtitle')}
          </p>
          <div className="social-icons text-center mb-4">
            <a href="https://www.linkedin.com/in/suryakanta-pani-19a544294" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/Suryakantapani" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/pani_suryakanta/" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="mailto:suryakantapani2004@gmail.com" className="text-light mx-2">
              <i className="fas fa-envelope fa-2x"></i>
            </a>
            <a href="https://wa.me/918658806552" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">{t('contact.nameLabel')}</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder={t('contact.namePlaceholder')} 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">{t('contact.emailLabel')}</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder={t('contact.emailPlaceholder')} 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">{t('contact.messageLabel')}</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="4" 
                placeholder={t('contact.messagePlaceholder')} 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="btn btn-light w-100"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? t('contact.sending') : isSubmitted ? t('contact.sent') : t('contact.sendButton')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;