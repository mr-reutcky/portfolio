import React from "react";
import { motion } from "framer-motion";
import "../css/Contact.css";
import { fadeInUp, staggerContainer } from "../utils/animations";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-label="Contact">
      <div className="contact__fade" aria-hidden="true"></div>

      <motion.div
        className="contact__inner"
        variants={staggerContainer(0.18)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.header className="contact__header" variants={fadeInUp}>
          <h2 className="contact__title">Get in Touch</h2>
          <p className="contact__subtitle">
            Let’s connect! Whether you have a project in mind or just want to
            chat, I’d love to hear from you.
          </p>
        </motion.header>

        <motion.div className="contact__info" variants={fadeInUp}>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sreutcky@gmail.com">sreutcky@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+12049628868">(204) 962-8868</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/samuel-reutcky"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/samuel-reutcky
            </a>
          </p>
        </motion.div>

        <motion.div className="contact__actions" variants={fadeInUp}>
          <a className="btn btn--primary" href="mailto:sreutcky@gmail.com">
            Contact Now
          </a>
        </motion.div>
      </motion.div>

      <div className="contact__glow" aria-hidden="true"></div>
    </section>
  );
}
