import { motion } from "framer-motion";
import "../css/About.css";

import {
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../utils/animations";

export default function About() {
  return (
    <section className="about" id="about" aria-label="About me">
      {/* Top fade so it blends smoothly from the hero */}
      <div className="about__fade" aria-hidden="true"></div>

      {/* Outer container: staggers intro + sidebar */}
      <motion.div
        className="about__inner"
        variants={staggerContainer(0.18)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        {/* Intro column */}
        <motion.div className="about__intro" variants={staggerContainer(0.14)}>
          <motion.h2 className="about__title" variants={fadeInDown}>
            About
          </motion.h2>

          <motion.p className="about__lead" variants={fadeInUp}>
            I’m <strong>Samuel Reutcky</strong>, a web developer focused on building
            fast, accessible, and clean user experiences. I love taking ideas from
            rough sketches to reliable, production-ready interfaces.
          </motion.p>

          <motion.p className="about__body" variants={fadeInLeft}>
            My toolkit lives at the intersection of <strong>React</strong>,{" "}
            <strong>TypeScript/JavaScript</strong>, and <strong>C#/.NET</strong> with a
            strong emphasis on performance and maintainability. I care about readable code,
            crisp UI details, and smooth interactions.
          </motion.p>

          <motion.div className="about__actions" variants={fadeInRight}>
            <a className="btn btn--primary" href="#projects">See Projects</a>
            <a className="btn btn--ghost" href="#contact">Get in Touch</a>
          </motion.div>
        </motion.div>

        {/* Sidebar column with its own stagger for cards */}
        <motion.aside
          className="about__sidebar"
          aria-label="Quick facts"
          variants={staggerContainer(0.12)}
        >
          <motion.div className="card" variants={fadeInUp}>
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
          </motion.div>

          <motion.div className="card" variants={fadeInUp}>
            <h3 className="card__title">Focus Areas</h3>
            <ul className="list">
              <li>Accessible, responsive UI</li>
              <li>Component-driven architecture</li>
              <li>API integration & data flows</li>
              <li>Performance & DX</li>
            </ul>
          </motion.div>

          <motion.div className="card" variants={fadeInUp}>
            <h3 className="card__title">Currently</h3>
            <p className="card__text">
              Exploring advanced patterns in React + server APIs, polishing portfolio
              projects, and open to freelance or for hire roles.
            </p>
          </motion.div>
        </motion.aside>
      </motion.div>

      <div className="about__glow" aria-hidden="true"></div>
    </section>
  );
}
