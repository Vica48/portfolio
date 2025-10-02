import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import emailjs from '@emailjs/browser';
import '../../styles/components.css';

const Contact = () => {
  const { isSpanish } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const content = {
    english: {
      title: "Contact",
      subtitle: "Let's work together",
      description: "I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just want to say hello!",
      contactInfo: {
        email: "Email",
        emailValue: "vic.devand@gmail.com",
        phone: "Phone",
        phoneValue: "+52 999 117 1768",
        location: "Location",
        locationValue: "Mérida, Yucatán, Mexico",
        linkedin: "LinkedIn",
        linkedinValue: "linkedin.com/in/vicdevand",
        github: "GitHub",
        githubValue: "github.com/vicdevand"
      },
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        sendMessage: "Send Message"
      }
    },
    spanish: {
      title: "Contacto",
      subtitle: "Trabajemos juntos",
      description: "Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. ¡No dudes en contactarme si te gustaría colaborar o simplemente quieres saludar!",
      contactInfo: {
        email: "Correo",
        emailValue: "vic.devand@gmail.com",
        phone: "Teléfono",
        phoneValue: "+52 999 117 1768",
        location: "Ubicación",
        locationValue: "Mérida, Yucatán, México",
        linkedin: "LinkedIn",
        linkedinValue: "linkedin.com/in/vicdevand",
        github: "GitHub",
        githubValue: "github.com/vicdevand"
      },
      form: {
        name: "Nombre",
        email: "Correo",
        subject: "Asunto",
        message: "Mensaje",
        sendMessage: "Enviar Mensaje"
      }
    }
  };

  const currentContent = isSpanish ? content.spanish : content.english;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = 'service_ty9k8pn';
      const templateId = 'template_portfolio';
      const publicKey = '7JtnDffmrFwdnRC1I';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'vic.devand@gmail.com',
        },
        publicKey
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{currentContent.title}</h2>
        <p className="section-subtitle">{currentContent.subtitle}</p>
        <p className="section-description">{currentContent.description}</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <span className="contact-label">{currentContent.contactInfo.email}</span>
                <span className="contact-value">
                  <a href={`mailto:${currentContent.contactInfo.emailValue}`}>
                    {currentContent.contactInfo.emailValue}
                  </a>
                </span>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-details">
                <span className="contact-label">{currentContent.contactInfo.phone}</span>
                <span className="contact-value">
                  <a href={`tel:${currentContent.contactInfo.phoneValue}`}>
                    {currentContent.contactInfo.phoneValue}
                  </a>
                </span>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div className="contact-details">
                <span className="contact-label">{currentContent.contactInfo.location} </span>
                <span className="contact-value">{currentContent.contactInfo.locationValue}</span>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </span>
              <div className="contact-details">
                <span className="contact-label">{currentContent.contactInfo.linkedin} </span>
                <span className="contact-value">
                  <a href={`https://${currentContent.contactInfo.linkedinValue}`} target="_blank" rel="noopener noreferrer">
                    {currentContent.contactInfo.linkedinValue}
                  </a>
                </span>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
              <div className="contact-details">
                <span className="contact-label">{currentContent.contactInfo.github} </span>
                <span className="contact-value">
                  <a href={`https://${currentContent.contactInfo.githubValue}`} target="_blank" rel="noopener noreferrer">
                    {currentContent.contactInfo.githubValue}
                  </a>
                </span>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={currentContent.form.name}
                  className="form-input"
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={currentContent.form.email}
                  className="form-input"
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={currentContent.form.subject}
                  className="form-input"
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={currentContent.form.message}
                  className="form-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="cta-button cta-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : currentContent.form.sendMessage}
              </button>
              {submitStatus === 'success' && (
                <p style={{ color: '#22c55e', marginTop: '1rem' }}>
                  {isSpanish ? '¡Mensaje enviado exitosamente!' : 'Message sent successfully!'}
                </p>
              )}
              {submitStatus === 'error' && (
                <p style={{ color: '#ef4444', marginTop: '1rem' }}>
                  {isSpanish ? 'Error al enviar mensaje. Por favor intenta de nuevo.' : 'Error sending message. Please try again.'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
