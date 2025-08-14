import { motion } from "framer-motion";
import "../css/Hero.css";

import {
  fadeInDown,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer
} from "../utils/animations";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Intro">
      <motion.div
        className="hero__inner"
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.6,
          margin: "-65px 0px -10% 0px"
        }}
      >
        <motion.p className="hero__eyebrow" variants={fadeInDown}>
          Hi, I’m Samuel — Web Developer
        </motion.p>

        <motion.h1 className="hero__title" variants={fadeInUp}>
          Building fast, accessible, and clean web experiences.
        </motion.h1>

        <motion.p className="hero__subtitle" variants={fadeInLeft}>
          I craft modern frontends with React and solid backends with C# / Node.
          Focused on performance, DX, and sleek UX.
        </motion.p>

        <motion.div className="hero__actions" variants={fadeInRight}>
          <a className="btn btn--primary" href="#projects">View Projects</a>
          <a className="btn btn--ghost" href="#contact" aria-label="Contact Samuel">
            Contact
          </a>
        </motion.div>

        <motion.div className="hero__meta" variants={fadeInUp}>
          <span>Available for freelance & hire</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__glow"
        aria-hidden="true"
        initial={{ opacity: 0, y: 10, scale: 1.02 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />

      <motion.a
        href="#about"
        className="scroll-down"
        aria-label="Scroll down to About"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <motion.span
          className="arrow"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          &#x25BC;
        </motion.span>
      </motion.a>
    </section>
  );
}
