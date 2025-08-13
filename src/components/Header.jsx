import React, { useEffect, useState } from "react";
import "../css/Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const headerH = 65;

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    let ticking = false;
    let sectionTops = [];

    const recalc = () => {
      sectionTops = sections.map((el) => ({
        id: el.id,
        top: Math.floor(el.getBoundingClientRect().top + window.scrollY),
        node: el,
      }));
      sectionTops.sort((a, b) => a.top - b.top);
    };

    const setFromScroll = () => {
      const y = window.scrollY + headerH + 1;
      let current = sectionTops[0]?.id || "home";
      for (const s of sectionTops) {
        if (s.top <= y) current = s.id;
        else break;
      }

      const docBottom = Math.ceil(window.innerHeight + window.scrollY);
      const atBottom = Math.abs(
        docBottom - Math.ceil(document.documentElement.scrollHeight)
      ) <= 2;
      if (atBottom) current = sectionTops[sectionTops.length - 1]?.id || current;

      if (current !== activeSection) setActiveSection(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setFromScroll();
        ticking = false;
      });
    };

    const onResize = () => {
      recalc();
      setFromScroll();
    };

    recalc();
    setFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.setTimeout(() => {
      recalc();
      setFromScroll();
    }, 300);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [activeSection, headerH]);

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
