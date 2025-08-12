import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <section className="about" id="about" role="region" aria-label="About me">
      {/* Top fade so it blends smoothly from the hero */}
      <div className="about__fade" aria-hidden="true"></div>

      <div className="about__inner">
        <div className="about__intro">
          <h2 className="about__title">About</h2>
          <p className="about__lead">
            I’m <strong>Samuel Reutcky</strong>, a web developer focused on building
            fast, accessible, and clean user experiences. I love taking ideas from
            rough sketches to reliable, production-ready interfaces.
          </p>

          <p className="about__body">
            My toolkit lives at the intersection of <strong>React</strong>,{" "}
            <strong>TypeScript/JavaScript</strong>, and <strong>C#/.NET</strong> with a
            strong emphasis on performance and maintainability. I care about readable code,
            crisp UI details, and smooth interactions.
          </p>

          <div className="about__actions">
            <a className="btn btn--primary" href="#projects">See Projects</a>
            <a className="btn btn--ghost" href="#contact">Get in Touch</a>
          </div>
        </div>

        <aside className="about__sidebar" aria-label="Quick facts">
          <div className="card">
            <h3 className="card__title">Core Stack</h3>
            <div className="chips">
              <span className="chip">React</span>
              <span className="chip">TypeScript</span>
              <span className="chip">JavaScript</span>
              <span className="chip">C#</span>
              <span className="chip">ASP.NET</span>
              <span className="chip">Node/Express</span>
              <span className="chip">SQL</span>
              <span className="chip">Git/GitHub</span>
            </div>
          </div>

          <div className="card">
            <h3 className="card__title">Focus Areas</h3>
            <ul className="list">
              <li>Accessible, responsive UI</li>
              <li>Component-driven architecture</li>
              <li>API integration & data flows</li>
              <li>Performance & DX</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="card__title">Currently</h3>
            <p className="card__text">
              Exploring advanced patterns in React + server APIs, polishing portfolio
              projects, and open to freelance or for hire roles.
            </p>
          </div>
        </aside>
      </div>

      <div className="about__glow" aria-hidden="true"></div>
    </section>
  );
}
