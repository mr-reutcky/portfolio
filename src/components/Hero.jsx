import React from "react";
import "../css/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Intro">
      <div className="hero__inner">
        <p className="hero__eyebrow">Hi, I’m Samuel — Web Developer</p>
        <h1 className="hero__title">
          Building fast, accessible, and clean web experiences.
        </h1>
        <p className="hero__subtitle">
          I craft modern frontends with React and solid backends with C# / Node.
          Focused on performance, DX, and sleek UX.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">View Projects</a>
          <a className="btn btn--ghost" href="#contact" aria-label="Contact Samuel">
            Contact
          </a>
        </div>

        <div className="hero__meta">
          <span>Available for freelance & hire</span>
        </div>
      </div>
      <div className="hero__glow" aria-hidden="true"></div>
      <a href="#about" className="scroll-down" aria-label="Scroll down to About">
        <span className="arrow">&#x25BC;</span>
      </a>
    </section>
  );
}
