import React, { useEffect, useState } from "react";
import "../css/Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% of section visible to trigger
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">Samuel Reutcky</div>
      <nav className="nav">
        <a href="#home" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          About
        </a>
        <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
          Projects
        </a>
        <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
          Contact
        </a>
      </nav>
    </header>
  );
}
