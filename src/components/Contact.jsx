import React from "react";
import "../css/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-label="Contact">
      <div className="contact__fade" aria-hidden="true"></div>

      <div className="contact__inner">
        <header className="contact__header">
          <h2 className="contact__title">Get in Touch</h2>
          <p className="contact__subtitle">
            Let’s connect! Whether you have a project in mind or just want to chat, I’d love to hear from you.
          </p>
        </header>

        <div className="contact__info">
          <p><strong>Email:</strong> <a href="mailto:sreutcky@gmail.com" target="_blank">sreutcky@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+12049628868">(204) 962-8868</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/samuel-reutcky" target="_blank" rel="noreferrer">linkedin.com/in/samuel-reutcky</a></p>
        </div>

        <div className="contact__actions">
          <a className="btn btn--primary" href="mailto:sreutcky@gmail.com" target="_blank">
            Contact Now
          </a>
        </div>
      </div>

      <div className="contact__glow" aria-hidden="true"></div>
    </section>
  );
}
