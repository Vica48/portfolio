import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">CONTACTO</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:vic.devand@gmail.com" className="contact-link">vic.devand@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Teléfono:</span>
              <a href="tel:999-117-1768" className="contact-link">999-117-1768</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Ubicación:</span>
              <span className="contact-text">Mérida, Yucatán, México</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
