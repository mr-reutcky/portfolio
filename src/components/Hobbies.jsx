import React from "react";
import { motion } from "framer-motion";
import "../css/Hobbies.css";

import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../utils/animations";

const DEFAULT_HOBBIES = [
  {
    title: "Sailing",
    blurb:
      "Strategy, focus, and reading conditions — the same skills I bring to debugging and performance work.",
    icon: "sail",
  },
  {
    title: "Animals",
    blurb:
      "I’m big on animal welfare and love spending time with pets — patience and empathy included.",
    icon: "paw",
  },
  {
    title: "Gaming",
    blurb:
      "I enjoy game design patterns and tight feedback loops — inspiration for smooth UX and clean systems.",
    icon: "gamepad",
  },
  {
    title: "Cooking",
    blurb:
      "I love experimenting in the kitchen, much like coding — combining ingredients (or code) to create something new.",
    icon: "cooking",
  },
];

function Icon({ name }) {
  switch (name) {
    case "sail":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3 20h18M5 18c8-1 9-7 9-14-5 3-8 8-9 14zm9-14c3 5 4 9 5 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "paw":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 14c2.6 0 4.5 1.8 4.5 4s-1.9 2.5-4.5 2.5-4.5-.8-4.5-2.5 1.9-4 4.5-4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="5.5" cy="9.5" r="1.5" fill="currentColor" />
          <circle cx="18.5" cy="9.5" r="1.5" fill="currentColor" />
          <circle cx="9" cy="6" r="1.5" fill="currentColor" />
          <circle cx="15" cy="6" r="1.5" fill="currentColor" />
        </svg>
      );
    case "gamepad":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6 8h12a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4l-2-2H8l-2 2a4 4 0 0 1-4-4v-2a4 4 0 0 1 4-4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="9"
            y1="12"
            x2="9"
            y2="14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="8"
            y1="13"
            x2="10"
            y2="13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="15.5" cy="12" r="0.8" fill="currentColor" />
          <circle cx="17.5" cy="14" r="0.8" fill="currentColor" />
        </svg>
      );
    case "cooking":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M4 3h16v2H4V3zm1 4h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7zm4 3v6m6-6v6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Hobbies({ items = DEFAULT_HOBBIES }) {
  return (
    <section className="hobbies" id="hobbies" aria-label="Hobbies">
      <div className="hobbies__fade" aria-hidden="true"></div>

      <motion.div
        className="hobbies__inner"
        variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.header className="hobbies__header" variants={fadeInUp}>
          <h2 className="hobbies__title">Hobbies</h2>
          <p className="hobbies__subtitle">
            A few things I do outside of code that shape how I think and build.
          </p>
        </motion.header>

        <motion.ul className="hobbies__grid" variants={staggerContainer(0.12)}>
          {items.map((h, i) => (
            <motion.li
              key={h.title}
              className="hobby"
              variants={variantForIndex(i)}
              whileHover={{ y: -2 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <motion.div
                className="hobby__icon"
                aria-hidden="true"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
              >
                <Icon name={h.icon} />
              </motion.div>

              <h3 className="hobby__title">{h.title}</h3>
              <p className="hobby__blurb">{h.blurb}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="hobbies__glow" aria-hidden="true"></div>
    </section>
  );
}
